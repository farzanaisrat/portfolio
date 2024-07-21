import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model(props) {
  const { scene } = useGLTF('models/scene2.gltf');
  const headRef = useRef();

  // Set up the animation mixer
  useEffect(() => {
    scene.animations = [];
    // Assuming the head bone is named 'Bone001' in Blender
    headRef.current = scene.getObjectByName('Bone001');

    console.log('Initial Head Rotation:', headRef.current.rotation);

    // Ensure the head starts facing forward
    if (headRef.current) {
      //headRef.current.rotation.set(0, 0 ,0); // Set rotation to face forward
    }
    
  }, [scene]);

  const maxRotationX = Math.PI; // 45 degrees
  const maxRotationY = Math.PI / 4;
  //const maxRotationZ = Math.PI / 4;

  // Update head bone rotation based on mouse movement
  useFrame((state) => {
    if (headRef.current) {
      const { mouse } = state;
      // Calculate the desired rotation
      let rotationX = mouse.x * Math.PI ; // Adjust this value to control sensitivity
      //let rotationY = mouse.y * Math.PI / 1;
      //let rotationZ = mouse.z * Math.PI / 1;

      // Clamp the rotation values
      rotationX = THREE.MathUtils.clamp(rotationX, -maxRotationX, maxRotationX);
      //rotationY = THREE.MathUtils.clamp(rotationY, -maxRotationY, maxRotationY);
      //rotationZ = THREE.MathUtils.clamp(rotationZ, -maxRotationZ, maxRotationZ);

      // Apply the clamped rotation
      headRef.current.rotation.y = rotationX;
      //headRef.current.rotation.x = rotationY;

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
      <Model position={[-1.2, -4.5, 0]} scale={[1.35, 1.35, 0.65]} /> {/* Move down and scale up */}
      <OrbitControls enableZoom={false} enableRotate={false}/>
    </Canvas>
  );
}

export default EveModel;
