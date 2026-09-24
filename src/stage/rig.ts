import { POSES, getLayout, type Pose } from './scenes';

// Shared, mutable scene state. GSAP tweens it; useFrame reads it. Never React state.
const initial = POSES.hero[getLayout()];
export const rig: Pose & { paused: boolean } = {
  suit: { ...initial.suit },
  camera: { ...initial.camera },
  reactor: initial.reactor,
  thrust: initial.thrust,
  light: initial.light,
  paused: false, // true while the suit is off stage: skip rendering entirely
};

// Normalised pointer (-1..1). The canvas ignores pointer events, so track on window.
export const pointer = { x: 0, y: 0 };
