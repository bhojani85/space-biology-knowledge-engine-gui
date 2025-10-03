"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Stars() {
  const starsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
      starsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01
    }
  })

  const starPositions = new Float32Array(5000 * 3)
  for (let i = 0; i < 5000; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 100
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 100
  }

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={5000}
          array={starPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

function Planet() {
  const planetRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (planetRef.current) {
      planetRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <mesh ref={planetRef} position={[15, 5, -20]}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial
        color="#ff6b35"
        emissive="#ff6b35"
        emissiveIntensity={0.3}
        roughness={0.8}
      />
    </mesh>
  )
}

export default function SpaceBackground() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <Stars />
      <Planet />
    </>
  )
}