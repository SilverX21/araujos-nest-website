# Portfolio Website — Specification

## Overview

A personal portfolio website for **Nuno Araújo**, a Software Developer based in Portugal. Built with **React 19**, the site showcases professional experience, technical skills, certifications, education, and personal interests. The goal is a modern, elegant, developer-focused portfolio that feels polished and personal.

---

## Profile Data

| Field       | Value                                          |
|-------------|------------------------------------------------|
| Name        | Nuno Araújo                                    |
| Role        | Software Developer                             |
| Nationality | Portuguese                                     |
| Location    | Porto, Portugal                                |
| LinkedIn    | linkedin.com/in/nuno-araújo-202295132          |
| GitHub      | github.com/SilverX21                           |

---

## Website Sections

### 1. Hero

**Spotlight:** First impression — name, role, and a short punchy tagline.

**Features:**
- Full-screen landing with animated particle background
- Name: **Nuno Araújo**
- Role: **Software Developer**
- Tagline (suggestion): *"Building robust backends and clean APIs — from Portugal to the cloud."*
- CTA buttons: `View My Work` (scrolls to Experience) and `Get in Touch` (scrolls to Contact or links to LinkedIn)
- Scroll indicator arrow at the bottom

---

### 2. About

**Spotlight:** A brief human portrait — who Nuno is, how he works, and what drives him.

**Features:**
- Short narrative paragraph (2–3 sentences mixing professional and personal tone)
- Soft skills displayed as tags or icons:
  - Teamwork
  - Critical Thinking
  - Creativity
  - Problem Solving
  - Determined
- Languages section:
  - 🇵🇹 Portuguese — Native
  - 🇬🇧 English — Proficient
  - 🇪🇸 Spanish — Conversational
- A small personal note: active Scout since 2001, photography enthusiast, traveller, football fan

---

### 3. Skills

**Spotlight:** Technical depth shown clearly and organized by category.

**Features:**
- Grouped into visual card panels or tag clusters:

  **Architecture & Patterns**
  - RESTful API
  - Domain Driven Design (DDD)
  - .NET MVC
  - Dependency Injection
  - OOP

  **Backend**
  - C# / .NET Core
  - Entity Framework Core
  - ASP.NET Core
  - Node.js
  - xUnit (Unit Testing)

  **Frontend**
  - JavaScript / TypeScript
  - HTML5 / CSS3
  - React

  **Databases**
  - SQL Server
  - PostgreSQL

  **Cloud & DevOps**
  - AWS (Lambda, S3, RDS, ECS, EC2, Secrets Manager)
  - Docker
  - Git

  **Methodologies**
  - Agile / Scrum

- Skills displayed as animated tag pills or icon + label cards with hover effects
- Optionally: subtle proficiency indicators (not percentage bars — those are overused and imprecise)

---

### 4. Work Experience

**Spotlight:** A career timeline showing growth and progression across 7+ years.

**Features:**
- Vertical timeline layout (alternating left/right on desktop, single column on mobile)
- Each card shows: Company, Role, Dates, Location, and a bullet-point description
- Ordered **most recent first**

---

#### 4.1 ISS Tech Team Portugal — Software Developer (Backend)
**2025/04 – Present | Porto, Portugal**

Working as a Backend Developer on multiple IoT projects focused on smart building management. The systems collect and process real-time building data to enable space management optimisation and predictive maintenance.

- Design, develop, and maintain REST APIs and AWS Lambda functions
- Manage and optimise relational databases (PostgreSQL and SQL Server)
- Work daily with AWS Cloud services: Lambda, S3, RDS, ECS, EC2, Secrets Manager
- Deploy and manage containerised applications with Docker on AWS
- Collaborate across teams for feature delivery and system reliability

**Tech stack:** .NET Core · C# · PostgreSQL · SQL Server · AWS · Docker

---

#### 4.2 ITSector, S.A. — SI Consultant (.NET Developer)
**2020/10 – 2025/03 | Braga, Portugal**

Over 4 years delivering software solutions for the banking and insurance sectors. Worked as a .NET Developer on multiple projects spanning API development, mobile backends, and public web portals. Also took on an analyst role during a major company merger.

- Developed RESTful APIs for **Ageas** (insurance) and **Millennium BCP Poland** (Goodie's flyer search and competition tracking feature)
- Contributed to the backend of **Montepio's Mobile App**
- Analyst role during the **Ageas and Ocidental** insurance company merger process
- Developed and maintained public-facing web portals: **Montepio Crédito**, **FNB Banks**, among others

**Tech stack:** .NET Core · C# · SQL Server · ASP.NET MVC · REST APIs · Agile

---

#### 4.3 NRNow — Software Developer (Full-Stack)
**2019/07 – 2020/06 | Braga, Portugal**

Full-stack developer on **RealPeritos**, a portal dedicated to car inspection, investigation, and expert examination workflows.

- Developed and maintained new features for the RealPeritos portal
- Worked across both front-end and back-end layers of the platform
- Collaborated with a small team in a fast-paced environment

**Tech stack:** .NET · C# · JavaScript · HTML · CSS · SQL Server

---

#### 4.4 F3M Information Systems, S.A. — Software Developer (Full-Stack)
**2018/03 – 2019/03 | Braga, Portugal**

Full-stack developer on two internal company products: **ESocial** (HR/social management) and **Produz** (production management).

- Developed new features and maintained existing modules across both platforms
- Worked on both UI and backend layers

**Tech stack:** .NET · C# · JavaScript · HTML · CSS · SQL Server

---

#### 4.5 F3M Information Systems, S.A. — Developer Trainee
**2017/02 – 2017/06 | Braga, Portugal**

Professional internship during final year of degree. First industry experience in a software development environment.

---

### 5. Education

**Spotlight:** Academic foundation shown cleanly without over-engineering.

**Features:**
- Single entry card (degree only — clean, not cluttered)

**Instituto Politécnico do Cávado e do Ave (IPCA)**
Bachelor's Degree in Computer Systems Engineering
2013/10 – 2017/10 | Barcelos, Portugal

---

### 6. Certifications

**Spotlight:** Demonstrates continuous learning — a long and growing list that shows commitment to self-improvement.

**Features:**
- Grid of certification cards (3 columns desktop, 2 tablet, 1 mobile)
- Each card: Certificate name, Platform badge (Udemy / Dometrain / Code With Mosh / Rumos), Date
- Ordered **most recent first**
- Optional: filter by topic (Cloud, .NET, Frontend, Testing, etc.)

| Certificate | Platform | Date |
|---|---|---|
| Claude Code - The Practical Guide | Udemy | June 2026 |
| Understanding TypeScript | Udemy | April 2026 |
| NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno) | Udemy | January 2026 |
| Entity Framework Core - A Full Tour | Udemy | September 2025 |
| ASP.NET Core Development with PostgreSQL & Azure | Udemy | June 2025 |
| Cloud Fundamentals - AWS Services for C# Developers | Dometrain | May 2025 |
| Docker for .NET Developers | Udemy | May 2025 |
| From Zero to Hero: REST APIs in .NET | Dometrain | March 2025 |
| The Complete ASP.NET Core 9 Course for Busy Developers | Udemy | February 2025 |
| React 18 for Beginners | Code With Mosh | September 2024 |
| Unit Testing .NET Application with xUnit & MOQ | Udemy | May 2024 |
| C# Developers: Learn the Art of Writing Clean Code | Udemy | September 2022 |
| JavaScript Basics for Beginners | Udemy | September 2021 |
| Dependency Injection in .NET 5 (.NET Core) | Udemy | December 2020 |
| Entity Framework in Depth: The Complete Guide | Udemy | December 2020 |
| RESTful API with ASP.NET Core Web API - Create and Consume | Udemy | December 2020 |
| C# Advanced Topics: Prepare for Technical Interviews | Udemy | November 2020 |
| C# Intermediate: Classes, Interfaces and OOP | Udemy | September 2020 |
| C# Basics for Beginners: Learn C# Fundamentals by Coding | Udemy | August 2020 |
| Agile Software Development with Scrum | Rumos | March 2018 |

---

### 7. Extracurricular Activities

**Spotlight:** The human behind the code — community involvement and personal passions.

**Features:**
- Timeline/card for Scouts activity
- Icon row for hobbies

#### Scout CNE — Corpo Nacional de Escutas
**2001/02 – Present | Braga, Portugal**

Active Scout for over 20 years, currently a member of the **12-Dume group** in Braga. Became a **Chief Scout in 2023**.

Notable involvements (most recent first):
- **ACANUC 2025** — Organisation member
- **Rover Cenas 24** — Communication and marketing team
- **Chief Scout** — Rank achieved in 2023
- **ACANAC 2022** — Staff member
- **Cenáculo of Braga** — Team member, staff member, and workshop speaker

#### Personal Interests
- Gym
- Travelling
- Photography
- Football

---

### 8. Contact / Footer

**Spotlight:** Clean closing with easy ways to connect.

**Features:**
- Links to LinkedIn and GitHub
- Optional contact form (name, email, message) — or just a simple "Reach me at" with icons
- Copyright footer: © 2026 Nuno Araújo

---

## Confirmed Decisions

| Question | Answer |
|---|---|
| Profile photo | `public/profile.png` ✓ |
| Contact form | Social links only for now; form can be toggled via `VITE_SHOW_CONTACT_FORM` env variable. Email must never be hardcoded — use `VITE_CONTACT_EMAIL` secret in CI/CD |
| Projects section | "Coming Soon" card for **Travel Buddy** — a travel consultant app for managing clients, budgets, and trips |
| Colour palette | **Blueprint Noir** (see below) — confirmed after live preview |
| Theme toggle | Light **and** dark mode toggle included |
| Domain | TBD |

---

## Design System — "Blueprint Noir"

### Concept

A sophisticated dark portfolio that feels like **high-end developer documentation meets an editorial magazine**. Precise, architectural, and memorable. The aesthetic draws from blueprint technical drawings combined with a cinematic dark palette — purposefully different from typical purple-gradient-on-white dev portfolios.

---

### Colour Palette

#### Dark Mode (default)

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#07090F` | Page background |
| `--color-surface` | `#0D1117` | Cards, panels, navbar |
| `--color-elevated` | `#141B27` | Hover states, nested surfaces |
| `--color-cyan` | `#00C2FF` | Primary accent — CTAs, links, highlights, active states |
| `--color-cyan-dim` | `rgba(0,194,255,0.12)` | Tag backgrounds, glow fills |
| `--color-orange` | `#FF6B35` | Warm contrast accent — secondary CTAs, frontend skills |
| `--color-orange-dim` | `rgba(255,107,53,0.12)` | Tag backgrounds |
| `--color-emerald` | `#00D68F` | Success, "available" status, DevOps skills |
| `--color-emerald-dim` | `rgba(0,214,143,0.12)` | Tag backgrounds |
| `--color-text` | `#EEF2FF` | Primary text (slightly blue-tinted white) |
| `--color-muted` | `#8892A4` | Secondary text, descriptions |
| `--color-faint` | `#4A5568` | Tertiary text, metadata |
| `--color-border` | `rgba(0,194,255,0.08)` | Subtle borders on cards and dividers |
| `--color-border-hover` | `rgba(0,194,255,0.25)` | Borders on hover / focus |

#### Light Mode (class: `html.light`)

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#F0F4F8` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, panels |
| `--color-elevated` | `#E2EAF0` | Hover states |
| `--color-cyan` | `#0077B6` | Primary accent (darker for contrast on white) |
| `--color-orange` | `#C84B11` | Warm contrast accent |
| `--color-emerald` | `#00875A` | Success accent |
| `--color-text` | `#0D1B2A` | Primary text |
| `--color-muted` | `#4A6070` | Secondary text |
| `--color-faint` | `#94A3B8` | Tertiary text |

Theme switching: toggling the `.light` class on `<html>` at runtime. All CSS variables cascade automatically — no JS color logic needed.

---

### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Headings | `Syne` | 700, 800 | Section headings, hero name, section numbers |
| Body / UI | `Outfit` | 300, 400, 500, 600 | Body text, labels, nav links, buttons |
| Mono | `JetBrains Mono` | 400, 500 | Skill tags, dates, section labels, code references |

**Google Fonts import:**
```
Syne:wght@400;600;700;800
Outfit:wght@300;400;500;600;700
JetBrains+Mono:ital,wght@0,400;0,500;1,400
```

**CSS variables:**
```css
--font-display: "Syne", sans-serif;
--font-sans:    "Outfit", sans-serif;
--font-mono:    "JetBrains Mono", monospace;
```

**Type scale:**
- Hero name: `clamp(3.5rem, 10vw, 7rem)` — Syne 800, gradient fill
- Section headings: `clamp(2rem, 5vw, 3.25rem)` — Syne 800
- Body: `1rem / 1.65` — Outfit 400
- Section labels: `0.7rem`, letter-spacing `0.2em`, uppercase — JetBrains Mono
- Skill tags: `0.72rem` — JetBrains Mono

---

### Background & Texture

- **Dot grid** — `radial-gradient` dots using `--color-border` at 28px spacing, applied to `body::before` (fixed, full-screen, pointer-events none)
- **Particle canvas** — animated canvas (70 particles, connected by lines < 130px) sits behind the Hero content; particle colour adapts to current theme
- **Radial glow** — a soft `radial-gradient` circle of `rgba(0,194,255,0.06)` behind the Hero text, adds depth without being distracting

---

### Component Patterns

#### Cards (`.glass-card`)
```
background:    var(--color-surface)
border:        1px solid var(--color-border)
border-radius: 12px
padding:       1.5rem
transition:    border-color, box-shadow, transform — 0.25s ease

:hover
  border-color: var(--color-border-hover)
  box-shadow:   0 0 24px rgba(0,194,255,0.08), 0 8px 32px rgba(0,0,0,0.3)
  transform:    translateY(-2px)
```

#### Skill Tags (`.skill-tag`)
```
font-family:  JetBrains Mono, 0.72rem
padding:      0.3rem 0.7rem
border-radius: 4px
border:       1px solid var(--color-border)
background:   var(--color-elevated)
color:        var(--color-muted)

colour variants:
  .cyan    → cyan border/text/background-dim
  .orange  → orange border/text/background-dim
  .emerald → emerald border/text/background-dim
```

Skill colour assignment by category:
- Backend → `.cyan`
- Frontend → `.orange`
- Cloud & DevOps → `.emerald`
- Databases → `.cyan`
- Architecture → `.orange`
- Tools & Methods → `.emerald`

#### Buttons
```
.btn-primary  → background: cyan, color: bg, font: Outfit 600
.btn-outline  → transparent + border: border-hover, color: text

:hover both: translateY(-1px) + glow shadow
```

#### Section Label (`.section-label`)
```
font-family:  JetBrains Mono
font-size:    0.7rem, letter-spacing: 0.2em, uppercase
color:        var(--color-cyan)
::before      24px wide cyan horizontal line
```

#### Background Section Number (`.section-number`)
```
font-family:  Syne 800
font-size:    clamp(6rem, 15vw, 12rem)
color:        var(--color-border)   ← barely visible
position:     absolute, top-right of section
pointer-events: none, user-select: none
```

#### Navbar
```
height:          64px, position: fixed
backdrop-filter: blur(16px)
background:      rgba(7,9,15,0.8)  [dark] / rgba(240,244,248,0.85)  [light]
border-bottom:   1px solid var(--color-border)
logo:            "NA" in a 36×36 box, Syne 800, cyan — with hover glow
links:           JetBrains Mono, 0.72rem, uppercase, spaced 0.1em
theme toggle:    34×34 icon button, Sun/Moon icon
mobile:          hamburger → slide-down AnimatePresence menu
```

#### Timeline (Experience section)
```
vertical line:  1px, gradient from transparent → border-hover → transparent
dots:           12px circle, cyan fill, cyan glow ring
cards:          alternate left/right desktop, single column mobile
```

#### Platform Badges (Certifications)
```
.badge-udemy     → purple tint  (#A050F0)
.badge-dometrain → orange tint  (var(--color-orange))
.badge-mosh      → cyan tint    (var(--color-cyan))
.badge-rumos     → emerald tint (var(--color-emerald))
```

#### Gradient Text (`.gradient-text`)
```
dark:  linear-gradient(135deg, cyan → #60A5FA → orange)
light: linear-gradient(135deg, cyan → #2563EB → orange)
-webkit-background-clip: text, -webkit-text-fill-color: transparent
```

---

### Animations

| Name | Pattern | Used on |
|---|---|---|
| `float` | `translateY(0 → -8px → 0)` 6s ease-in-out infinite | Decorative elements |
| `glow-pulse` | box-shadow pulsing cyan ring 3s infinite | "Available" status dot |
| `spin-slow` | 360deg rotation 12s linear infinite | Photo conic-gradient ring |
| `scroll-bounce` | `translateY(0 → 6px) + opacity(1 → 0.4)` 2s infinite | Scroll indicator arrow |
| Framer Motion entrance | `{ opacity:0, y:28 } → { opacity:1, y:0 }` 0.65s ease | All sections, staggered |
| Framer Motion stagger | `staggerChildren: 0.12, delayChildren: 0.3` | Hero content |
| Framer Motion photo | `{ opacity:0, scale:0.85 } → { opacity:1, scale:1 }` | Hero photo |

All section entrances use `whileInView` with `once: true` and `margin: "-80px"` — animations fire once as the section enters the viewport.

---

### Layout Rules

- **Max width:** 1200px, centred, `margin: 0 auto`
- **Section padding:** `6rem 1.5rem` mobile → `7rem 3rem` desktop
- **Navbar height:** 64px (main content has `padding-top: 64px`)
- **Responsive breakpoint:** 768px (`md:`) for two-column layouts
- **Scroll behaviour:** `scroll-behavior: smooth` on `html`
- **Selection colour:** cyan background, bg-coloured text
- **Scrollbar:** 6px, styled to match theme

---

## Tech Stack (confirmed)

| Layer | Choice |
|---|---|
| Framework | React 19 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Fonts | Google Fonts — Syne, Outfit, JetBrains Mono |
| Deployment | Vercel or GitHub Pages |
| Secrets | GitHub Actions secrets → Vite env variables |

---

## File Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar, theme toggle, mobile menu
│   │   └── Footer.tsx          # Social links, copyright
│   ├── sections/
│   │   ├── Hero.tsx            # Full-screen hero, particle canvas, photo ring
│   │   ├── About.tsx           # Bio, soft skills, languages, interests, photo
│   │   ├── Skills.tsx          # Skill group cards, colour-coded tags
│   │   ├── Experience.tsx      # Vertical timeline, job cards
│   │   ├── Education.tsx       # Single degree card
│   │   ├── Certifications.tsx  # Dense grid, platform badges
│   │   ├── Projects.tsx        # Travel Buddy "coming soon" card
│   │   └── Extracurricular.tsx # Scouts timeline + hobbies
│   └── ui/
│       ├── ParticleCanvas.tsx  # Canvas particle animation
│       └── SectionTitle.tsx    # Label + heading + background number
├── data/
│   ├── profile.ts              # Personal info, languages, soft skills, interests
│   ├── experience.ts           # Work history (typed interface)
│   ├── skills.ts               # Skill groups with colour assignments
│   └── certifications.ts       # All 20 certifications with platform + category
├── index.css                   # Design system: @theme tokens, base, components, animations
├── App.tsx                     # Root: theme state, layout composition
└── main.tsx                    # React 19 entry point
```

---

## Responsive Design

### Breakpoint System

| Name | Min-width | Target devices |
|---|---|---|
| mobile (default) | 0px | Phones — 320px to 639px |
| `sm` | 640px | Large phones / phablets |
| `md` | 768px | Tablets (portrait and landscape) |
| `lg` | 1024px | Small laptops / large tablets |
| `xl` | 1200px | Desktops (max content width) |

**Strategy:** mobile-first. Default CSS targets the smallest screen. `sm:` / `md:` / `lg:` progressive enhancements add columns, increase spacing, reveal desktop-only elements.

**Touch rule:** Hover effects (`transform`, `box-shadow` glows) only fire on devices that support hover: `@media (hover: hover)`. No floating cards on touch screens — avoids elements getting stuck in hover state.

---

### Global Component Behaviour

#### `.section-container` padding
| Breakpoint | Padding |
|---|---|
| Mobile | `4rem 1.25rem` |
| sm (640px) | `5rem 2rem` |
| md (768px) | `7rem 3rem` |

#### `.section-number` (background giant number)
| Breakpoint | Behaviour |
|---|---|
| Mobile | Hidden (`display: none`) — too large, competes with content |
| md (768px) | Visible at `clamp(5rem, 12vw, 9rem)` |
| lg (1024px) | Full size `clamp(6rem, 15vw, 12rem)` |

#### `.section-heading` type scale
Uses `clamp()` — scales automatically:
- Mobile: ~`2rem`
- Tablet: ~`2.6rem`
- Desktop: ~`3.25rem`

#### `.glass-card` hover
| Breakpoint | Hover behaviour |
|---|---|
| Touch devices | No lift/glow (suppressed with `@media (hover: hover)`) |
| Mouse devices | Full `translateY(-2px)` + glow shadow |

#### Buttons
| Breakpoint | Behaviour |
|---|---|
| Mobile | Slightly smaller padding `0.65rem 1.25rem`, smaller font `0.85rem` |
| md+ | Full size |

---

### Section-by-Section Responsive Layout

#### Navbar
| Breakpoint | Layout |
|---|---|
| Mobile / tablet (< 768px) | Logo left · Theme toggle + Hamburger right · Nav hidden |
| Desktop (768px+) | Logo left · Nav links centre · Theme toggle right |

Mobile menu: slides down with `AnimatePresence`, full-width, stacked links.

---

#### Hero
| Breakpoint | Layout |
|---|---|
| Mobile (< 640px) | Single column · Text centred · Photo hidden |
| Tablet (640px–1023px) | Single column · Text left-aligned · Photo shown below, centred, smaller (160px) |
| Desktop (1024px+) | Two columns · Text left (1fr) · Photo right (220px ring) |

- Name font: `clamp(2.8rem, 8vw, 7rem)` — fits on one or two lines across all sizes
- CTA buttons: wrap to two rows on mobile if needed
- "Available" badge: same across all
- Scroll indicator: always visible at bottom

---

#### About
| Breakpoint | Layout |
|---|---|
| Mobile | Single column · Photo first (full-width, aspect 4/3) · Text below |
| Tablet (768px+) | Single column · Photo constrained to 280px · centred |
| Desktop (768px+) | Two columns: `1fr 340px` · Text left · Photo + interests right |

- Soft skill tags: wrap naturally
- Language cards: wrap to 2 per row on mobile, 3 on tablet+

---

#### Skills
| Breakpoint | Grid |
|---|---|
| Mobile | 1 column |
| sm (640px) | 2 columns |
| lg (1024px) | 3 columns |

Each card: category label (Syne) + tag cloud. Tags wrap naturally inside the card.

---

#### Experience (Timeline)
| Breakpoint | Layout |
|---|---|
| Mobile | Single column · All cards full-width · Timeline line hidden · Dot shown left |
| Tablet (768px+) | Single column · Cards at 90% width · Centred · Line shown left of cards |
| Desktop (1024px+) | Two-sided · Line centred · Cards alternate left / right |

On mobile, the glowing dot sits at the top-left of each card and the timeline becomes a simple left-aligned vertical flow.

---

#### Education
All breakpoints: single centred card, max-width 600px.

---

#### Certifications
| Breakpoint | Grid |
|---|---|
| Mobile | 1 column |
| sm (640px) | 2 columns |
| lg (1024px) | 3 columns |
| xl (1200px) | 4 columns |

Cards are compact — title, badge, date. They stack cleanly at all widths.

---

#### Projects (Travel Buddy — Coming Soon)
All breakpoints: single centred card, max-width 640px.

---

#### Extracurricular
| Breakpoint | Layout |
|---|---|
| Mobile | Single column · Scouts card full-width · Hobbies 2-column icon grid |
| md (768px) | Two columns: Scouts left (2fr) · Hobbies right (1fr) |

---

#### Footer
All breakpoints: centred, stacked (social icons above copyright text).

---

### Typography Responsive Rules

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero name | `clamp(2.8rem, 8vw, 5rem)` | `clamp(3.5rem, 8vw, 6rem)` | `clamp(3.5rem, 10vw, 7rem)` |
| Section heading | `clamp(1.75rem, 5vw, 2.5rem)` | auto via clamp | `clamp(2rem, 5vw, 3.25rem)` |
| Body | `0.95rem` | `1rem` | `1rem` |
| Section label | `0.68rem` | `0.7rem` | `0.7rem` |
| Skill tags | `0.68rem` | `0.72rem` | `0.72rem` |

---

### Touch & Accessibility

- All interactive elements: min touch target `44×44px`
- Focus-visible outlines: `outline: 2px solid var(--color-cyan)` with `outline-offset: 3px`
- No hover-only information — all hover states are complementary, not exclusive
- `prefers-reduced-motion`: wrap Framer Motion transitions in a check; if reduced motion is preferred, use `opacity` only (no translate/scale)

```css
@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-spin-slow,
  .animate-scroll-bounce { animation: none; }
}
```

---

## Implementation Order (step by step)

| Step | Deliverable | Status | Notes |
|---|---|---|---|
| 1 | Project scaffold | ✅ Done | `package.json`, `vite.config.ts`, `tsconfig`, `index.html` |
| 2 | Design system | ✅ Done | `src/index.css` — tokens, base styles, components, animations, responsive rules |
| 3 | Data layer | ✅ Done | All `src/data/*.ts` files with TypeScript interfaces |
| 4 | Entry point | ✅ Done | `src/main.tsx` + `src/App.tsx` (theme toggle wired up) |
| 5 | Navbar | ✅ Done | Sticky blur navbar, redesigned geometric N+A lettermark logo (SVG polylines), mobile slide-down menu, theme toggle |
| 6 | Hero | ✅ Done | ParticleCanvas, spinning conic-gradient photo ring, gradient name, CTA buttons, scroll indicator |
| 7 | About | ✅ Done | See detailed notes below |
| 8 | Skills | ⏳ Pending | Colour-coded group cards |
| 9 | Experience | ⏳ Pending | Vertical timeline |
| 10 | Education | ⏳ Pending | Single card |
| 11 | Certifications | ⏳ Pending | Dense grid with platform badges |
| 12 | Projects | ⏳ Pending | Travel Buddy coming-soon card |
| 13 | Extracurricular | ⏳ Pending | Scouts + hobbies |
| 14 | Footer | ⏳ Pending | Social links, copyright |

---

## Step 7 — About Section (detailed)

### Language Cards
- **Design:** Horizontal card with signal-strength bars (5-bar mobile antenna metaphor) on the left and a circular flag photo (from `flagcdn.com`) with a glowing cyan ring on the right
- **Interactions:** `react-parallax-tilt` (3D tilt + cyan glare on hover), `BorderBeam` (animated cyan→emerald light travelling around the card border using CSS `@property` + conic-gradient)
- **Layout:** Horizontal CSS scroll-snap carousel on mobile (`scroll-snap-type: x mandatory`), 3-in-a-row flex on tablet/desktop
- **Packages added:** `react-parallax-tilt` (3kB, zero deps)
- **Component added:** `src/components/ui/BorderBeam.tsx`

### Soft Skills
- **Design:** Cyber-Glass Magnetic Chips — cut-corner hexagonal chips using `clip-path: polygon(10px 0%, ...)` (military spec 8-corner cut). Border simulated with `filter: drop-shadow` which follows the clip-path shape.
- **Interactions:**
  - **Magnetic hover:** `useMotionValue` + `useSpring` track cursor position relative to each chip centre and apply a 0.3× spring-damped translation — chips subtly pull toward the cursor
  - **Descriptor reveal:** `AnimatePresence` + `maxWidth` animation reveals a one-liner descriptor on hover (e.g. "Teamwork — Collaborative by default")
  - **Entrance:** staggered `whileInView` scale + opacity per chip
- **Mobile:** Chips render as static styled pills (no magnetic effect on touch); centred layout
- **Desktop:** Left-aligned flex-wrap, magnetic effect active

### Interests
- Orange pill tags with Lucide icons (Dumbbell, Plane, Camera, Swords)

---

## 💡 Ideas to Try Later

### Option 1: Orbital Rings Soft Skills
**Concept:** Replace the current chip layout with a planetary orbit system. A central geometric hub (diamond or N+A initials) sits in the middle. 2–3 concentric elliptical rings rotate at different speeds (`8s`, `13s`, `20s`), each carrying a skill badge. Labels counter-rotate to stay upright. On hover, the skill pauses, scales up 1.2×, and pulses a cyan glow.

**Why save for later:** Requires significant vertical space — best as a standalone hero-style section or a dedicated "Skills personality" sub-section. Would compete with the current 2-column About grid.

**Implementation notes:**
- Framer Motion: `animate={{ rotate: 360 }}`, `transition={{ duration: 12, repeat: Infinity, ease: "linear" }}`
- Counter-rotate labels: `animate={{ rotate: -360 }}` on inner span
- `whileHover={{ scale: 1.2, boxShadow: "0 0 20px #00C2FF" }}`
- Use 3 rings at durations 8s / 13s / 20s for organic feel
- `clip-path: polygon(...)` hex-corner chip shapes for each badge
- Reference: https://0xfunhub.hashnode.dev/how-i-made-the-orbit-like-skills-section-with-framer-motion-and-tailwind-css

---

## Added Packages (beyond initial spec)

| Package | Version | Purpose |
|---|---|---|
| `react-parallax-tilt` | ^1.7.x | 3D tilt + glare effect on language cards |

## Added UI Components

| Component | Path | Description |
|---|---|---|
| `BorderBeam` | `src/components/ui/BorderBeam.tsx` | Animated conic-gradient beam that travels the border of any `position: relative; overflow: hidden` element. Uses CSS `@property --beam-angle` for GPU-accelerated animation. |
