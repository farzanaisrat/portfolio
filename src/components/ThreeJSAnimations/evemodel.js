import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model(props) {
  const { scene, animations } = useGLTF('models/scene_5.gltf');
  const headRef = useRef();
  const mixer = useRef();

  useEffect(() => {
    // Assuming the head bone is named 'Bone001' in Blender
    headRef.current = scene.getObjectByName('Bone001');

    // Set up the animation mixer
    mixer.current = new THREE.AnimationMixer(scene);
    const action = mixer.current.clipAction(
      animations.find((clip) => clip.name === 'KeyAction.002')
    );
    action.play();
    
    return () => {
      // Clean up the mixer when the component unmounts
      mixer.current.stopAllAction();
      mixer.current.uncacheClip(action.getClip());
      mixer.current.uncacheRoot(scene);
    };
  }, [scene, animations]);


  // Update head bone rotation based on mouse movement and advance the animation mixer
  useFrame((state, delta) => {
    if (headRef.current) {
      const { mouse } = state;
      // Calculate the desired rotation
      let rotationX = mouse.x * Math.PI; // Adjust this value to control sensitivity
      
      // Apply the clamped rotation
      headRef.current.rotation.y = rotationX;
      
    }

    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return <primitive object={scene} {...props} />;
}

function EveModel() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0.5, 4], fov: 50 }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model position={[-1.2, -4.5, 0.5]} scale={[1.35, 1.35, 0.65]} /> {/* Move down and scale up */}
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
}

export default EveModel;
