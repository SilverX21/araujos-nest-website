import { useFrame } from '@react-three/fiber';
import { MathUtils, Vector3, type PerspectiveCamera } from 'three';
import { IDLE } from './scenes';
import { pointer, rig } from './rig';

const target = new Vector3();
const smoothed = { x: 0, y: 0 };

export default function CameraRig() {
  useFrame((state, dt) => {
    const cam = state.camera as PerspectiveCamera;
    const { camera } = rig;
    smoothed.x = MathUtils.damp(smoothed.x, pointer.x, IDLE.damping, dt);
    smoothed.y = MathUtils.damp(smoothed.y, pointer.y, IDLE.damping, dt);
    cam.position.set(
      camera.x + smoothed.x * IDLE.cameraParallax,
      camera.y - rig.pan + smoothed.y * IDLE.cameraParallax,
      camera.z,
    );
    cam.lookAt(target.set(camera.tx, camera.ty - rig.pan + smoothed.y * IDLE.pointerPitch, camera.tz));
    if (cam.fov !== camera.fov) {
      cam.fov = camera.fov;
      cam.updateProjectionMatrix();
    }
  });
  return null;
}
