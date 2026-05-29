import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Sparkles, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import {
  Scissors3D,
  Comb3D,
  Mirror3D,
  SprayBottle3D,
  HairDryer3D,
  SalonChair3D,
  Brush3D,
} from './salon3d/SalonObjects'
import SalonPhotoFrame from './salon3d/SalonPhotoFrame'
import { salonImages } from '../data/images'
import './HeroScene.css'

function MouseParallax() {
  const group = useRef<THREE.Group>(null!)
  const { pointer } = useThree()

  useFrame(() => {
    if (!group.current) return
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * 0.25,
      0.05,
    )
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * 0.12,
      0.05,
    )
  })

  return (
    <group ref={group}>
      <SalonChair3D position={[0, -0.6, 0]} rotation={[0, 0.6, 0]} scale={0.9} />

      <Scissors3D position={[1.8, 0.6, 0.5]} rotation={[0.4, -0.8, 0.6]} scale={0.7} />
      <Comb3D position={[-1.7, 0.3, 0.8]} rotation={[0.5, 0.7, -0.3]} scale={0.55} />
      <Mirror3D position={[-1.2, 0.8, -0.6]} rotation={[0, 0.4, 0]} scale={0.45} />
      <SprayBottle3D position={[1.5, -0.2, -0.5]} rotation={[0.2, -0.5, 0.3]} scale={0.65} />
      <HairDryer3D position={[-0.3, 1.2, 0.3]} rotation={[0.3, 1.2, 0.8]} scale={0.6} />
      <Brush3D position={[0.8, 1.1, -0.8]} rotation={[-0.2, -0.6, 0.5]} scale={0.55} />

      <SalonPhotoFrame
        url={salonImages.heroSecondary}
        position={[-2.2, -0.3, -0.2]}
        rotation={[0, 0.55, 0]}
        width={1.1}
        height={1.4}
      />
      <SalonPhotoFrame
        url={salonImages.heroAccent}
        position={[2.3, 0.5, -0.3]}
        rotation={[0, -0.6, 0]}
        width={0.95}
        height={1.2}
      />
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 4]} intensity={1.8} color="#f0d78c" />
      <pointLight position={[-4, 2, 2]} intensity={1} color="#c49a7a" />
      <spotLight
        position={[0, 6, 3]}
        angle={0.45}
        penumbra={1}
        intensity={2.5}
        color="#d4af37"
      />
      <directionalLight position={[-2, 4, 2]} intensity={0.6} color="#fff8ee" />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <MouseParallax />
        <ContactShadows
          position={[0, -1.1, 0]}
          opacity={0.45}
          scale={12}
          blur={2.5}
          color="#000"
        />
      </Suspense>

      <Sparkles count={60} scale={10} size={1.5} speed={0.25} color="#d4af37" opacity={0.4} />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="hero-scene">
      <Canvas
        camera={{ position: [0, 0.5, 7], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
