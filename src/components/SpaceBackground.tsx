"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function SpaceBackground() {
  const cloudGroup1Ref = useRef<THREE.Points>(null)
  const cloudGroup2Ref = useRef<THREE.Points>(null)
  const cloudGroup3Ref = useRef<THREE.Points>(null)

  useFrame((state) => {
    // Slow drifting clouds
    if (cloudGroup1Ref.current) {
      cloudGroup1Ref.current.rotation.y = state.clock.elapsedTime * 0.01
      cloudGroup1Ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.05) * 2
    }
    if (cloudGroup2Ref.current) {
      cloudGroup2Ref.current.rotation.y = -state.clock.elapsedTime * 0.015
      cloudGroup2Ref.current.position.x = Math.cos(state.clock.elapsedTime * 0.03) * 1.5
    }
    if (cloudGroup3Ref.current) {
      cloudGroup3Ref.current.rotation.x = state.clock.elapsedTime * 0.008
      cloudGroup3Ref.current.position.z = Math.sin(state.clock.elapsedTime * 0.04) * 1
    }
  })

  // Create cloud particles
  const createCloudParticles = (count: number, spread: number) => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * spread
      positions[i + 1] = (Math.random() - 0.5) * spread * 0.5
      positions[i + 2] = (Math.random() - 0.5) * spread
    }
    return positions
  }

  return (
    <>
      {/* Cloud layer 1 - Close */}
      <points ref={cloudGroup1Ref} position={[0, 0, -5]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={1000}
            array={createCloudParticles(1000, 80)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={3} 
          color="#e0e7ef" 
          transparent 
          opacity={0.4}
          sizeAttenuation 
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {/* Cloud layer 2 - Middle */}
      <points ref={cloudGroup2Ref} position={[0, 2, -10]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={800}
            array={createCloudParticles(800, 100)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={4} 
          color="#cbd5e1" 
          transparent 
          opacity={0.3}
          sizeAttenuation 
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Cloud layer 3 - Far */}
      <points ref={cloudGroup3Ref} position={[0, -1, -15]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={600}
            array={createCloudParticles(600, 120)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={5} 
          color="#94a3b8" 
          transparent 
          opacity={0.2}
          sizeAttenuation 
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Soft ambient lighting for gloomy weather */}
      <ambientLight intensity={0.8} color="#b8c6d9" />
      <directionalLight position={[5, 10, 5]} intensity={0.4} color="#e0e7ef" />
      <hemisphereLight args={['#bfdbfe', '#94a3b8', 0.6]} />
    </>
  )
}