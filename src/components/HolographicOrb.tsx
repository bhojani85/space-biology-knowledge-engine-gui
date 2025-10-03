"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function HolographicOrb() {
  const orbRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.x = state.clock.elapsedTime * 0.1
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
    if (glowRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 1.5) * 0.15 + 1
      glowRef.current.scale.setScalar(pulse)
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Outer soft glow - like sun through clouds */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color="#93bbde"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main orb - soft blue/gray */}
      <mesh ref={orbRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#7ba5ca"
          emissive="#9bb8d3"
          emissiveIntensity={0.3}
          roughness={0.4}
          metalness={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Inner core - lighter */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial
          color="#d4e3f0"
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Soft point light */}
      <pointLight position={[0, 0, 0]} intensity={1} color="#9bb8d3" distance={8} />
    </group>
  )
}