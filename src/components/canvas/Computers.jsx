import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ismobile}) => {
  // Load the computer model
  const Computer = useGLTF('/desktop_pc/scene.gltf')

  return (
    <mesh>
       <hemisphereLight intensity={0.15} 
      groundColor="black" />
   
      <spotLight
      position={[-20 , 50 , 10]}
      angle={0.12}
      penumbra={1}
      intensity={2}
      castShadow
      shadowMapSize={1024}

      />
         <pointLight intensity={9} />
      <primitive 
      object={Computer.scene} 
      scale={ismobile ? 0.3 :0.75}
      position={ismobile ? [0 ,-2 , -0.6]:[0,-3.25 , -1.5]}
      rotation={[-0.01 , -0.2 , -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
const [ismobile , setismobile]= useState(false)

// foe the mobile device to view the computer

useEffect(()=>{
  const mediaQuery = window.matchMedia('(max-width:500px)');

  setismobile(mediaQuery.matches)

   const handlemediaquery = (event)=>{
    setismobile(event.matches)
   }

   mediaQuery.addEventListener('change' , handlemediaquery);

   return ()=>{
    mediaQuery.removeEventListener('change' , handlemediaquery);
   }

},[])
 

  return (
    <Canvas frameloop='demand'
     shadows 
     camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}
      />
      <Computers ismobile={ismobile}/>


      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas