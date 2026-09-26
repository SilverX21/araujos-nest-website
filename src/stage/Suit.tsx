import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';
import { Box3, MathUtils, Mesh, MeshStandardMaterial, Vector3, type Group, type PointLight } from 'three';
import { IDLE, IS_PLACEHOLDER, SUIT, SUIT_MODEL_URL } from './scenes';
import { pointer, rig } from './rig';

// Gives the placeholder the intended gunmetal look; the final model ships its own materials.
const gunmetal = new MeshStandardMaterial({ color: '#5d646e', metalness: 0.85, roughness: 0.3 });

export default function Suit({ animate }: { animate: boolean }) {
  const group = useRef<Group>(null!);
  const reactorLight = useRef<PointLight>(null!);
  const thrustLight = useRef<PointLight>(null!);
  const { scene, animations } = useGLTF(SUIT_MODEL_URL);
  const { actions } = useAnimations(animations, group);

  const fit = useMemo(() => {
    const box = new Box3().setFromObject(scene);
    const height = box.getSize(new Vector3()).y;
    const scale = SUIT.height / height;
    return { scale, y: -(box.min.y + height * SUIT.chest) * scale };
  }, [scene]);

  useEffect(() => {
    if (!IS_PLACEHOLDER) return;
    scene.traverse((o) => {
      if (o instanceof Mesh) o.material = gunmetal;
    });
  }, [scene]);

  useEffect(() => {
    const idle = actions[SUIT.idleClip];
    if (!idle) return;
    idle.setEffectiveTimeScale(animate ? 1 : 0).play();
    return () => void idle.stop();
  }, [actions, animate]);

  useFrame((state, dt) => {
    const t = animate ? state.clock.elapsedTime : 0;
    const g = group.current;
    const { suit } = rig;
    g.position.set(suit.x, suit.y + Math.sin(t * IDLE.hoverSpeed) * IDLE.hoverAmplitude, suit.z);
    g.rotation.x = suit.rx;
    g.rotation.z = suit.rz + Math.sin(t * IDLE.hoverSpeed * 0.7) * IDLE.swayRadians;
    g.rotation.y = MathUtils.damp(g.rotation.y, suit.ry + pointer.x * IDLE.pointerYaw, IDLE.damping, dt);
    reactorLight.current.intensity = rig.reactor * (2.5 + Math.sin(t * 2) * 0.4);
    thrustLight.current.intensity = rig.thrust * (8 + Math.sin(t * 30) * 1.5);
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={fit.scale} position-y={fit.y} />
      {/* ponytail: stand-in reactor at a configured offset; use the model's `Reactor` mesh once the final GLB exists */}
      <group position={SUIT.reactorOffset}>
        <mesh>
          <sphereGeometry args={[0.06, 24, 24]} />
          <meshBasicMaterial color="#cfefff" toneMapped={false} />
        </mesh>
        <pointLight ref={reactorLight} color="#8fdcff" distance={3} decay={2} />
      </group>
      {/* ponytail: one underglow light stands in for thrusters; use the model's `Thruster_*` meshes later */}
      <pointLight ref={thrustLight} position={[0, -1.3, 0.2]} color="#ff6a3d" distance={2.5} decay={2} />
    </group>
  );
}

useGLTF.preload(SUIT_MODEL_URL);
