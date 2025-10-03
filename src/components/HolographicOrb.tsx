"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function HolographicOrb() {
  const orbRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.x = state.clock.getElapsedTime() * 0.3
      orbRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
      const scale = 1 + Math.sin(state.clock.getElapsedTime()) * 0.1
      orbRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <mesh ref={orbRef} position={[-8, 0, -5]}>
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}