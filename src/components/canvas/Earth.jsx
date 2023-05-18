import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from "../Loader"
import * as THREE from 'three';
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  // const renderer= new THREE.WebGLRenderer();
  // renderer.dispose();
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, autoClear:true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI}
        minPolarAngle={0}
       
        />
        <Earth />

      </Suspense>
      

    </Canvas>
  )
}

export default EarthCanvas