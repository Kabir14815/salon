import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

const gold = '#d4af37'
const goldLight = '#f0d78c'
const chrome = '#e8e8e8'
const leather = '#1a1410'
const rose = '#c49a7a'

type GroupProps = {
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
}

function Metal({ color = chrome }: { color?: string }) {
  return (
    <meshStandardMaterial
      color={color}
      metalness={0.95}
      roughness={0.12}
      envMapIntensity={1.2}
    />
  )
}

export function Scissors3D({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: GroupProps) {
  const ref = useRef<THREE.Group>(null!)

  useFrame((state) => {
    ref.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.15
  })

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={ref} position={position} rotation={rotation} scale={scale}>
        <group rotation={[0, 0, 0.35]}>
          <mesh position={[0.35, 0, 0]} rotation={[0, 0, -0.1]}>
            <boxGeometry args={[0.75, 0.025, 0.12]} />
            <Metal />
          </mesh>
          <mesh position={[-0.12, -0.18, 0]}>
            <torusGeometry args={[0.14, 0.025, 12, 24]} />
            <meshStandardMaterial color={gold} metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
        <group rotation={[0, 0, -0.35]}>
          <mesh position={[-0.35, 0, 0]} rotation={[0, 0, 0.1]}>
            <boxGeometry args={[0.75, 0.025, 0.12]} />
            <Metal />
          </mesh>
          <mesh position={[0.12, -0.18, 0]}>
            <torusGeometry args={[0.14, 0.025, 12, 24]} />
            <meshStandardMaterial color={gold} metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
        <mesh rotation={[0, 0, 0.35]}>
          <cylinderGeometry args={[0.04, 0.04, 0.08, 12]} />
          <Metal color={goldLight} />
        </mesh>
      </group>
    </Float>
  )
}

export function Comb3D({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: GroupProps) {
  const teeth = Array.from({ length: 14 }, (_, i) => i)

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.6}>
      <group position={position} rotation={rotation} scale={scale}>
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[1.1, 0.18, 0.06]} />
          <meshStandardMaterial color={gold} metalness={0.85} roughness={0.25} />
        </mesh>
        {teeth.map((i) => (
          <mesh key={i} position={[-0.48 + i * 0.074, -0.12, 0]}>
            <boxGeometry args={[0.03, 0.35, 0.04]} />
            <Metal />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

export function Mirror3D({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: GroupProps) {
  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.5}>
      <group position={position} rotation={rotation} scale={scale}>
        <mesh>
          <torusGeometry args={[0.85, 0.06, 16, 48]} />
          <meshStandardMaterial color={gold} metalness={0.95} roughness={0.15} />
        </mesh>
        <mesh>
          <circleGeometry args={[0.78, 48]} />
          <meshStandardMaterial
            color="#f8f4ee"
            metalness={0.9}
            roughness={0.05}
            envMapIntensity={2}
          />
        </mesh>
        <mesh position={[0, -0.95, 0]}>
          <cylinderGeometry args={[0.04, 0.06, 0.5, 12]} />
          <meshStandardMaterial color={gold} metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

export function SprayBottle3D({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: GroupProps) {
  return (
    <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.7}>
      <group position={position} rotation={rotation} scale={scale}>
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.22, 0.25, 0.7, 24]} />
          <meshPhysicalMaterial
            color="#2a1f18"
            metalness={0.3}
            roughness={0.4}
            transparent
            opacity={0.85}
            transmission={0.2}
          />
        </mesh>
        <mesh position={[0, 0.22, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 0.15, 16]} />
          <meshStandardMaterial color={gold} metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.38, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.2, 12]} />
          <Metal />
        </mesh>
        <mesh position={[0, 0.52, 0]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <Metal color={goldLight} />
        </mesh>
      </group>
    </Float>
  )
}

export function HairDryer3D({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: GroupProps) {
  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.65}>
      <group position={position} rotation={rotation} scale={scale}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.18, 0.22, 0.55, 20]} />
          <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0.42, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.12, 0.18, 0.3, 20]} />
          <meshStandardMaterial color={gold} metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[-0.35, -0.15, 0]} rotation={[0, 0, -0.4]}>
          <boxGeometry args={[0.12, 0.35, 0.14]} />
          <meshStandardMaterial color="#222" metalness={0.5} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

export function SalonChair3D({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: GroupProps) {
  const ref = useRef<THREE.Group>(null!)

  useFrame((state) => {
    ref.current.rotation.y = rotation[1] + state.clock.elapsedTime * 0.08
  })

  return (
    <group ref={ref} position={position} rotation={[rotation[0], 0, rotation[2]]} scale={scale}>
      <mesh position={[0, -0.55, 0]}>
        <cylinderGeometry args={[0.35, 0.45, 0.15, 24]} />
        <Metal color="#333" />
      </mesh>
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.35, 12]} />
        <Metal color={chrome} />
      </mesh>
      <mesh position={[0, -0.05, 0.05]} rotation={[-0.15, 0, 0]}>
        <boxGeometry args={[0.9, 0.12, 0.85]} />
        <meshStandardMaterial color={leather} metalness={0.2} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.45, -0.25]} rotation={[-0.25, 0, 0]}>
        <boxGeometry args={[0.85, 0.75, 0.12]} />
        <meshStandardMaterial color={leather} metalness={0.2} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.1, 0.48]}>
        <boxGeometry args={[0.9, 0.55, 0.08]} />
        <meshStandardMaterial color={rose} metalness={0.3} roughness={0.6} />
      </mesh>
      <mesh position={[-0.5, 0.15, 0.1]}>
        <boxGeometry args={[0.08, 0.45, 0.55]} />
        <Metal color={gold} />
      </mesh>
      <mesh position={[0.5, 0.15, 0.1]}>
        <boxGeometry args={[0.08, 0.45, 0.55]} />
        <Metal color={gold} />
      </mesh>
    </group>
  )
}

export function Brush3D({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: GroupProps) {
  return (
    <Float speed={1.6} rotationIntensity={0.35} floatIntensity={0.55}>
      <group position={position} rotation={rotation} scale={scale}>
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.05, 0.06, 0.5, 12]} />
          <meshStandardMaterial color="#2a1810" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.12, 0]}>
          <cylinderGeometry args={[0.14, 0.1, 0.28, 16]} />
          <meshStandardMaterial color={gold} metalness={0.8} roughness={0.25} />
        </mesh>
        {Array.from({ length: 40 }, (_, i) => {
          const angle = (i / 40) * Math.PI * 2
          const r = 0.08 + (i % 3) * 0.01
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * r, 0.3, Math.sin(angle) * r]}
              rotation={[0.1, angle, 0]}
            >
              <boxGeometry args={[0.012, 0.18, 0.012]} />
              <meshStandardMaterial color="#1a1410" roughness={0.9} />
            </mesh>
          )
        })}
      </group>
    </Float>
  )
}
