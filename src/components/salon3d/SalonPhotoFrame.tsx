import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, Float } from '@react-three/drei'
import * as THREE from 'three'

type SalonPhotoFrameProps = {
  url: string
  position?: [number, number, number]
  rotation?: [number, number, number]
  width?: number
  height?: number
}

export default function SalonPhotoFrame({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  width = 1.6,
  height = 2,
}: SalonPhotoFrameProps) {
  const texture = useTexture(url)
  const ref = useRef<THREE.Group>(null!)

  useFrame((state) => {
    ref.current.rotation.y =
      rotation[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.04
  })

  const frameW = width + 0.12
  const frameH = height + 0.12

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={ref} position={position} rotation={rotation}>
        <mesh position={[0, 0, -0.02]}>
          <boxGeometry args={[frameW, frameH, 0.06]} />
          <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.02]}>
          <planeGeometry args={[width, height]} />
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
        <mesh position={[frameW / 2 - 0.03, frameH / 2 - 0.03, 0.06]}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial
            color="#f0d78c"
            metalness={1}
            roughness={0.1}
            emissive="#d4af37"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  )
}
