import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal,Float,OrbitControls,Preload,useTexture } from '@react-three/drei'
import CanvasLoader from "../Loader"
import { logo } from '../../assets'
import * as THREE from 'three';
const Ball = (props) => {
  const [decal]=useTexture([props.imgurl])
  // console.log(props.imgurl);

  return (
    <Float
    speed={1.25}
    rotationIntensity={1}
    floatIntensity={2}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[0,0,0.05]} />
      <mesh castShadow receiveShadow scale={2.8}>
      <icosahedronGeometry args={[1,1]} />
      <meshStandardMaterial 
      color="#fff8eb"
      polygonOffset
      polygonOffsetFactor={-5}
      flatShading
      />
      <Decal 
      position={[0,0,1]}
      rotation={[2*Math.PI,0,6.25]}
      map={decal}
      scale={1}
      flatShading

      />
      </mesh>
  </Float>
  )
}
const BallCanvas=({icon})=>{
  // const renderer= new THREE.WebGLRenderer();
  // renderer.dispose();
  return(
    <Canvas
    frameloop='demand'
    dpr={[1,2]}
    gl={{preserveDrawingBuffer:true,autoClear:true}}
    >
    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls 
      enableZoom={false}
      enablePan={false}
      
      />
      <Ball imgurl={icon} />
      </Suspense> 
      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas