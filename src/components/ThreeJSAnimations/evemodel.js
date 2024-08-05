import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model(props) {
  const { scene, animations } = useGLTF('models/scene_1.gltf');
  const headRef = useRef();
  const mixer = useRef();
  const [initialMouse, setInitialMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    headRef.current = scene.getObjectByName('Bone001');

    mixer.current = new THREE.AnimationMixer(scene);
    const action = mixer.current.clipAction(
      animations.find((clip) => clip.name === 'KeyAction.002')
    );
    action.play();
   
    setInitialMouse({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    return () => {
      mixer.current.stopAllAction();
      mixer.current.uncacheClip(action.getClip());
      mixer.current.uncacheRoot(scene);
    };
  }, [scene, animations]);
  
  const maxRotationX = Math.PI;
  
  useFrame((state, delta) => {
    if (headRef.current) {
      const { mouse } = state;

      let rotationX = (mouse.x - initialMouse.x / window.innerWidth) * Math.PI;
      
      rotationX = THREE.MathUtils.clamp(rotationX, -maxRotationX, maxRotationX);

      headRef.current.rotation.y = rotationX;
    }

    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return <primitive object={scene} {...props} />;
}

function EveBackground() {
  return (
    <mesh position={[0.2, -1, -1]} rotation={[0, 0, 0]}>
      <circleGeometry args={[3, 64]} />
      <meshBasicMaterial color="#0d47a1" />
    </mesh>
  );
}

function EveModel() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0.5, 4], fov: 50 }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <EveBackground />
      <Model position={[-1.2, -4.5, 0.5]} scale={[1.35, 1.35, 0.65]} />
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
}

export default EveModel;
