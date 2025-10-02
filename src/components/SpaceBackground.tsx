"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function SpaceBackground() {
  const planetRef = useRef<THREE.Mesh>(null)
  const starsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (planetRef.current) {
      planetRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.01
    }
  })

  // Create star field
  const starCount = 5000
  const starPositions = new Float32Array(starCount * 3)
  for (let i = 0; i < starCount * 3; i++) {
    starPositions[i] = (Math.random() - 0.5) * 200
  }

  return (
    <>
      {/* Star field */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={starCount}
            array={starPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.5} color="#ffffff" sizeAttenuation transparent opacity={0.8} />
      </points>
      
      {/* Distant planet */}
      <mesh ref={planetRef} position={[-15, 5, -20]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial
          color="#6b4ce8"
          emissive="#6b4ce8"
          emissiveIntensity={0.2}
          roughness={0.8}
        />
      </mesh>

      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
    </>
  )
}