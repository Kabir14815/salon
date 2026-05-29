import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { Scissors3D, Comb3D, Mirror3D, Brush3D } from './salon3d/SalonObjects'
import './Salon3DStrip.css'

function StripScene() {
  const group = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 2, 4]} intensity={1.2} color="#f0d78c" />
      <pointLight position={[-3, 1, 3]} intensity={0.6} color="#c49a7a" />

      <group ref={group}>
        <Scissors3D position={[-2.2, 0, 0]} rotation={[0.3, 0.6, 0.4]} scale={0.55} />
        <Comb3D position={[0, -0.1, 0]} rotation={[0.4, 0, 0]} scale={0.5} />
        <Mirror3D position={[2.2, 0.1, 0]} rotation={[0, -0.4, 0]} scale={0.4} />
        <Brush3D position={[1.2, 0.5, -0.5]} rotation={[-0.2, -0.8, 0.3]} scale={0.42} />
      </group>

      <Float speed={1} floatIntensity={0.3}>
        <Sparkles count={30} scale={8} size={1.2} speed={0.2} color="#d4af37" opacity={0.35} />
      </Float>
    </>
  )
}

export default function Salon3DStrip() {
  return (
    <div className="salon-3d-strip" aria-hidden="true">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 38 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <StripScene />
        </Canvas>
      </Suspense>
    </div>
  )
}
