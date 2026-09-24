import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { POSES, RENDER, SCENES, type Layout, type Pose, type PoseName } from './scenes';
import { rig } from './rig';

gsap.registerPlugin(ScrollTrigger);

type Range = readonly [number, number];

// The arrival plays once per page load, not again when a resize rebuilds the timelines.
let arrived = false;

function apply(p: Pose) {
  Object.assign(rig.suit, p.suit);
  Object.assign(rig.camera, p.camera);
  rig.reactor = p.reactor;
  rig.thrust = p.thrust;
  rig.light = p.light;
}

// Tweens every rig channel from one pose to another over [start, end] of the timeline.
// Explicit from→to values keep scrubbing deterministic in both directions.
function tween(tl: gsap.core.Timeline, from: Pose, to: Pose, [start, end]: Range, ease = 'none') {
  const vars = { duration: end - start, ease, immediateRender: false };
  const scalars = (p: Pose) => ({ reactor: p.reactor, thrust: p.thrust, light: p.light });
  tl.fromTo(rig.suit, { ...from.suit }, { ...to.suit, ...vars }, start)
    .fromTo(rig.camera, { ...from.camera }, { ...to.camera, ...vars }, start)
    .fromTo(rig, scalars(from), { ...scalars(to), ...vars }, start);
}

const scrubbed = (trigger: ScrollTrigger.Vars) =>
  gsap.timeline({ scrollTrigger: { scrub: true, ...trigger } });

function buildMotion(layout: Layout, stage: HTMLElement) {
  const P = (name: PoseName) => POSES[name][layout];

  if (!arrived) {
    arrived = true;
    apply(P('arrivalStart'));
    const intro = gsap.timeline();
    tween(intro, P('arrivalStart'), P('hero'), [0, SCENES.arrival.duration], SCENES.arrival.ease);
    // Scrolling (or landing on a #hash) fast-forwards the intro instead of fighting it.
    const skip = () => intro.progress(1);
    if (window.scrollY > 0) skip();
    else window.addEventListener('scroll', skip, { once: true, passive: true });
  }

  const { hero, flyby, offstage, reactor } = SCENES;

  const heroTl = scrubbed({ trigger: hero.trigger, start: hero.start, end: hero.end });
  tween(heroTl, P('hero'), P('heroReady'), hero.ready, 'power1.inOut');
  tween(heroTl, P('heroReady'), P('heroExit'), hero.exit, 'power2.in');
  heroTl.fromTo(
    '.hero-backword',
    { '--py': '0px', '--ps': 1 },
    { '--py': '-120px', '--ps': 1.15, duration: 1, ease: 'none', immediateRender: false },
    0,
  );

  const flyTl = scrubbed({
    trigger: flyby.trigger,
    start: flyby.start,
    end: flyby.end,
    onToggle: (self) => stage.classList.toggle('is-front', self.isActive),
  });
  tween(flyTl, P('flybyStart'), P('flybyMid'), [0, flyby.mid], 'power1.out');
  tween(flyTl, P('flybyMid'), P('flybyEnd'), [flyby.mid, 1], 'power2.in');

  ScrollTrigger.create({
    ...offstage,
    onToggle: (self) => {
      rig.paused = self.isActive;
    },
  });

  const reactorTl = scrubbed({ trigger: reactor.trigger, start: reactor.start, end: reactor.end });
  tween(reactorTl, P('reactorStart'), P('reactorEntry'), reactor.entry, 'power2.out');
  tween(reactorTl, P('reactorEntry'), P('reactorClose'), reactor.close, 'power1.inOut');
  tween(reactorTl, P('reactorClose'), P('reactorPulse'), reactor.pulse, 'power2.in');
  tween(reactorTl, P('reactorPulse'), P('finale'), reactor.finale, 'power2.out');

  // The closing line catches the energy pulse once: tracking opens and snaps back.
  gsap.fromTo(
    '.finale-title',
    { letterSpacing: '0.08em', opacity: 0.4 },
    {
      letterSpacing: '-0.025em',
      opacity: 1,
      duration: 0.9,
      ease: 'expo.out',
      scrollTrigger: { trigger: '.finale-title', start: 'top 85%', toggleActions: 'play none none reverse' },
    },
  );
}

// Reduced motion: no camera travel. The suit is shown in the hero and finale and faded out elsewhere.
function buildReduced(layout: Layout, stage: HTMLElement) {
  const show = (name: PoseName | null) => {
    if (name) apply(POSES[name][layout]);
    rig.paused = !name;
    stage.classList.toggle('is-hidden', !name);
  };
  show('hero');
  ScrollTrigger.create({
    trigger: '#hero',
    start: 'top bottom',
    end: 'bottom center',
    onToggle: (self) => show(self.isActive ? 'hero' : null),
  });
  ScrollTrigger.create({
    trigger: '#contact',
    start: 'top center',
    onToggle: (self) => show(self.isActive ? 'finale' : null),
  });
}

export function useChoreography(stage: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      {
        mobile: RENDER.mobileQuery,
        desktop: RENDER.desktopQuery,
        reduce: '(prefers-reduced-motion: reduce)',
      },
      (ctx) => {
        const { mobile, reduce } = ctx.conditions as Record<string, boolean>;
        const layout: Layout = mobile ? 'mobile' : 'desktop';
        const el = stage.current;
        if (!el) return;
        if (reduce) return buildReduced(layout, el);
        // Set before building so ScrollTrigger measures the taller #contact.
        document.documentElement.classList.add('cinematic');
        buildMotion(layout, el);
        return () => document.documentElement.classList.remove('cinematic');
      },
    );
    return () => mm.revert();
  }, [stage]);
}
