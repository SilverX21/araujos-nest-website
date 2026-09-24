import { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import gsap from 'gsap';
import Suit from './Suit';
import CameraRig from './CameraRig';
import { RENDER, getLayout } from './scenes';
import { pointer, rig } from './rig';

// R3F renders only when gsap.ticker ticks, so Lenis, ScrollTrigger and WebGL share one loop.
function Ticker() {
  const advance = useThree((s) => s.advance);
  useEffect(() => {
    const tick = (time: number) => advance(time);
    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [advance]);
  return null;
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[3, 4, 5]} intensity={1.6} color="#fff1e0" />
      <directionalLight position={[-4, 2, -3]} intensity={3} color="#7fd8ff" />
      <pointLight position={[2, -2, -2]} intensity={6} distance={6} color="#ff3b30" />
      <Environment resolution={256}>
        <Lightformer intensity={4} position={[0, 5, -4]} scale={[10, 2, 1]} />
        <Lightformer intensity={3} color="#ffb56b" position={[5, 1, 2]} rotation-y={-Math.PI / 2} scale={[6, 1, 1]} />
        <Lightformer intensity={2} color="#8fdcff" position={[-5, 0, 1]} rotation-y={Math.PI / 2} scale={[6, 1, 1]} />
      </Environment>
    </>
  );
}

export default function Stage({ reducedMotion }: { reducedMotion: boolean }) {
  const layout = getLayout();

  useEffect(() => {
    if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reducedMotion]);

  const { camera } = rig;
  return (
    <div className="stage" aria-hidden>
      <Canvas
        frameloop="never"
        dpr={[1, RENDER.maxDpr[layout]]}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [camera.x, camera.y, camera.z], fov: camera.fov }}
      >
        <Ticker />
        <fog attach="fog" args={['#07090F', 6, 18]} />
        <Lights />
        <Suit animate={!reducedMotion} />
        <CameraRig />
      </Canvas>
    </div>
  );
}
