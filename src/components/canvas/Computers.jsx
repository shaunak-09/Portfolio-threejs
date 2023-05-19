import React,{Suspense,useEffect,useState}from 'react'
import {Canvas} from "@react-three/fiber"
import {OrbitControls,Preload,useGLTF} from "@react-three/drei"
import CanvasLoader from "../Loader"
// import { Renderer } from '@react-three/fiber/dist/declarations/src/core/store'
const Computers = ({isMobile}) => {
  const computer =useGLTF("./desktop_pc/scene.gltf")
  return (
    <>
    <mesh>
    <hemisphereLight intensity={0.5} 
    groundColor="black"/>
    <pointLight intensity={1.5} />
    <spotLight
     position={[-20,40,20]}
     angle={0.1}
     penumbra={1}
     intensity={1}
     castShadow
     shadow-mapsize={102}
    />
    <primitive 
    object={computer.scene}
    scale={isMobile?0.55:0.65}
    position={isMobile?[0, -3.5, -2]:[0,-3.25,-1.5]}
    rotation={[-0.01,-0.2,-0.1]} />
   </mesh>
    </>
   
  )
}
const ComputersCanvas=()=>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    // return () => {
    //   mediaQuery.removeEventListener("change", handleMediaQueryChange);
    // };
  }, []);
  return(
    <>
    <Canvas
    frameloop='demand'
    shadows
    camera={{position:[20,3,5],fov:25,}}
    gl={{preserveDrawingBuffer:true,autoClear:true}}
    >
    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls 
      enableZoom={false}
      enablePan={false}
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}
      />
      <Computers isMobile={isMobile}/>
      </Suspense> 
      <Preload all/>
    </Canvas>
    </>
    
  )
}

export default ComputersCanvas