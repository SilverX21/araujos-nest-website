// All choreography numbers live here. See docs/STORYBOARD.md for the intent behind each scene.

// Set VITE_SUIT_MODEL_URL to the final GLB. The default is a CC0 dev placeholder
// (RobotExpressive by Tomás Laulhé / Quaternius), not the final asset.
export const SUIT_MODEL_URL: string =
  import.meta.env.VITE_SUIT_MODEL_URL ?? `${import.meta.env.BASE_URL}models/placeholder-robot.glb`;
export const IS_PLACEHOLDER = !import.meta.env.VITE_SUIT_MODEL_URL;

export const SUIT = {
  height: 2, // world units the model is normalised to
  chest: 0.55, // origin height as a fraction of model height
  idleClip: 'Idle',
  reactorOffset: [0, -0.2, 0.3] as [number, number, number], // chest-relative; placeholder torso
};

export const IDLE = {
  hoverAmplitude: 0.05,
  hoverSpeed: 1.2,
  swayRadians: 0.026, // ~1.5°
  pointerYaw: 0.07, // ~4°
  pointerPitch: 0.15, // look-at shift, world units
  cameraParallax: 0.12,
  damping: 4,
};

export interface Pose {
  suit: { x: number; y: number; z: number; rx: number; ry: number; rz: number };
  camera: { x: number; y: number; z: number; fov: number; tx: number; ty: number; tz: number };
  reactor: number; // reactor light multiplier (1 = normal, >1 = pulse)
  thrust: number; // 0..1 thruster glow
  light: number; // 0..1 key/rim/environment
}

export type Layout = 'desktop' | 'mobile';
interface PoseOverride {
  suit?: Partial<Pose['suit']>;
  camera?: Partial<Pose['camera']>;
  reactor?: number;
  thrust?: number;
  light?: number;
}

// Mobile poses are the desktop pose plus a few overrides.
function pose(desktop: Pose, mobile: PoseOverride = {}): Record<Layout, Pose> {
  return {
    desktop,
    mobile: {
      suit: { ...desktop.suit, ...mobile.suit },
      camera: { ...desktop.camera, ...mobile.camera },
      reactor: mobile.reactor ?? desktop.reactor,
      thrust: mobile.thrust ?? desktop.thrust,
      light: mobile.light ?? desktop.light,
    },
  };
}

const mobileCamera = { z: 9, fov: 40 };

export const POSES = {
  arrivalStart: pose(
    {
      suit: { x: 0, y: 0.4, z: -14, rx: 0.5, ry: 0.6, rz: 0 },
      camera: { x: 0, y: 0, z: 9, fov: 40, tx: 0, ty: 0, tz: 0 },
      reactor: 0,
      thrust: 1,
      light: 0,
    },
    { camera: { z: 11, fov: 44 } },
  ),
  hero: pose(
    {
      suit: { x: 1.1, y: 0, z: 0, rx: 0, ry: -0.15, rz: 0 },
      camera: { x: 0, y: 0.1, z: 6, fov: 35, tx: 0, ty: 0, tz: 0 },
      reactor: 1,
      thrust: 0,
      light: 1,
    },
    { suit: { x: 0, y: 1.35, ry: -0.1 }, camera: mobileCamera },
  ),
  // Turned to three-quarters, leaning back into the launch, thrusters warming up.
  heroReady: pose(
    {
      suit: { x: 1.1, y: 0.1, z: 0, rx: -0.35, ry: -0.8, rz: -0.1 },
      camera: { x: -0.6, y: -0.3, z: 6, fov: 35, tx: 0.2, ty: 0, tz: 0 },
      reactor: 1,
      thrust: 0.6,
      light: 1,
    },
    { suit: { x: 0, y: 1.45 }, camera: { ...mobileCamera, x: -0.3, tx: 0 } },
  ),
  heroExit: pose(
    {
      suit: { x: 4, y: 2.5, z: -4, rx: -0.8, ry: -0.8, rz: -0.3 },
      camera: { x: -0.6, y: -0.3, z: 6, fov: 35, tx: 0.2, ty: 0, tz: 0 },
      reactor: 1,
      thrust: 1,
      light: 1,
    },
    { suit: { x: 1.2, y: 5 }, camera: { ...mobileCamera, x: -0.3, tx: 0 } },
  ),
  // Fly-by: far lower-left → centre → past the camera. Mobile runs bottom → top.
  flybyStart: pose(
    {
      suit: { x: -3.5, y: -1.8, z: -8, rx: 1.2, ry: 0.6, rz: 0.3 },
      camera: { x: 0, y: 0, z: 6, fov: 35, tx: -0.4, ty: -0.3, tz: 0 },
      reactor: 1,
      thrust: 1,
      light: 1,
    },
    { suit: { x: 0.3, y: -5, z: -6, rx: -1.3, ry: 0, rz: 0 }, camera: { ...mobileCamera, tx: 0, ty: -0.5 } },
  ),
  flybyMid: pose(
    {
      suit: { x: -0.5, y: -0.3, z: 0, rx: 1.2, ry: 0.3, rz: 0.2 },
      camera: { x: 0, y: 0, z: 6, fov: 40, tx: -0.2, ty: -0.1, tz: 0 },
      reactor: 1,
      thrust: 1,
      light: 1,
    },
    { suit: { x: 0, y: -0.5, z: 1, rx: -1.3, ry: 0, rz: 0 }, camera: { ...mobileCamera, fov: 44, tx: 0, ty: 0 } },
  ),
  flybyEnd: pose(
    {
      suit: { x: 0.6, y: 0.4, z: 6.8, rx: 1.2, ry: 0, rz: 0.1 },
      camera: { x: 0, y: 0, z: 6, fov: 45, tx: 0.2, ty: 0.2, tz: 0 },
      reactor: 1,
      thrust: 1,
      light: 1,
    },
    { suit: { x: -0.2, y: 1.2, z: 9.8, rx: -1.3, ry: 0, rz: 0 }, camera: { ...mobileCamera, fov: 48, tx: 0, ty: 0.3 } },
  ),
  // Reactor: rises from below facing the viewer, camera pushes into the chest, then pulls back.
  reactorStart: pose(
    {
      suit: { x: 0, y: -4, z: 0, rx: -0.3, ry: 0, rz: 0 },
      camera: { x: 0, y: 0.1, z: 6, fov: 35, tx: 0, ty: 0, tz: 0 },
      reactor: 0.6,
      thrust: 1,
      light: 0.6,
    },
    { suit: { y: -5 }, camera: mobileCamera },
  ),
  reactorEntry: pose(
    {
      suit: { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 },
      camera: { x: 0, y: 0.1, z: 6, fov: 35, tx: 0, ty: 0, tz: 0 },
      reactor: 1,
      thrust: 0.3,
      light: 0.5,
    },
    { camera: mobileCamera },
  ),
  reactorClose: pose(
    {
      suit: { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 },
      camera: { x: 0, y: -0.2, z: 1.6, fov: 28, tx: 0, ty: -0.2, tz: 0.3 },
      reactor: 1.6,
      thrust: 0,
      light: 0.12,
    },
    { camera: { z: 2, fov: 34 } },
  ),
  reactorPulse: pose(
    {
      suit: { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 },
      camera: { x: 0, y: -0.2, z: 1.4, fov: 28, tx: 0, ty: -0.2, tz: 0.3 },
      reactor: 4,
      thrust: 0,
      light: 0.12,
    },
    { camera: { z: 1.8, fov: 34 } },
  ),
  finale: pose(
    {
      suit: { x: 0, y: 1.05, z: 0, rx: 0, ry: -0.1, rz: 0 },
      camera: { x: 0, y: 0.2, z: 7, fov: 35, tx: 0, ty: 0.2, tz: 0 },
      reactor: 1,
      thrust: 0.2,
      light: 0.8,
    },
    { suit: { y: 1.3 }, camera: { ...mobileCamera, z: 10, y: 0.2, ty: 0.2 } },
  ),
};

export type PoseName = keyof typeof POSES;

// Scene ranges. [start, end] pairs are normalised 0..1 of that scene's own scroll distance.
export const SCENES = {
  arrival: { duration: 2.4, ease: 'power3.out' },
  hero: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    ready: [0.25, 0.55], // hold until 0.25, then turn + lean
    exit: [0.55, 0.9], // launch out of frame before About's title arrives
  },
  // The canvas moves in front of the content while this is active: the suit itself is the wipe.
  flyby: { trigger: '#about', start: 'center center', end: 'bottom 30%', mid: 0.45 },
  // Suit is out of frame here; rendering pauses to free the GPU for reading.
  offstage: { trigger: '#skills', start: 'top top', endTrigger: '#contact', end: 'top 60%' },
  // #contact is taller than the viewport and mostly empty on purpose: the close-up needs the room.
  reactor: {
    trigger: '#contact',
    start: 'top 60%', // after Extracurricular's cards have scrolled mostly out
    end: 'bottom bottom',
    entry: [0, 0.3],
    close: [0.35, 0.6],
    pulse: [0.6, 0.7], // reactor spike + title tracking pulse
    finale: [0.7, 1],
  },
} as const;

export const RENDER = {
  // 'mobile' is the stacked composition: phones and any portrait screen (tablets included).
  mobileQuery: '(max-width: 767px), (orientation: portrait)',
  desktopQuery: '(min-width: 768px) and (orientation: landscape)',
  maxDpr: { desktop: 2, mobile: 1.5 },
};

export const getLayout = (): Layout =>
  window.matchMedia(RENDER.mobileQuery).matches ? 'mobile' : 'desktop';
