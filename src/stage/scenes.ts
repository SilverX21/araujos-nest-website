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
  reactor: number; // 0..1
  light: number; // 0..1 key/rim/environment
}

type Layout = 'desktop' | 'mobile';

export const POSES: Record<'hero', Record<Layout, Pose>> = {
  hero: {
    desktop: {
      suit: { x: 1.1, y: 0, z: 0, rx: 0, ry: -0.15, rz: 0 },
      camera: { x: 0, y: 0.1, z: 6, fov: 35, tx: 0, ty: 0, tz: 0 },
      reactor: 1,
      light: 1,
    },
    mobile: {
      suit: { x: 0, y: 1.35, z: 0, rx: 0, ry: -0.1, rz: 0 },
      camera: { x: 0, y: 0.1, z: 9, fov: 40, tx: 0, ty: 0, tz: 0 },
      reactor: 1,
      light: 1,
    },
  },
};

export const RENDER = {
  mobileQuery: '(max-width: 767px)',
  maxDpr: { desktop: 2, mobile: 1.5 },
};

export const getLayout = (): Layout =>
  window.matchMedia(RENDER.mobileQuery).matches ? 'mobile' : 'desktop';
