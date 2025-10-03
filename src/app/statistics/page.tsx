"use client"

import Scene3D from '@/components/Scene3D'
import FloatingPanel from '@/components/FloatingPanel'
import GraphVisualization from '@/components/GraphVisualization'
import Navbar from '@/components/Navbar'
import { BarChart3 } from 'lucide-react'

export default function StatisticsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-blue-950/20 to-black">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen pt-16 sm:pt-20 p-3 sm:p-4 md:p-6">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8 md:mb-12 pt-4 sm:pt-6 md:pt-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <BarChart3 className="w-5 h-5 sm:w-6 md:w-8 sm:h-6 md:h-8 text-purple-400 animate-pulse" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Data Visualizations
            </h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg px-4">
            Interactive Charts & Analytics
          </p>
        </header>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <FloatingPanel title="Data Visualizations" glowColor="purple" className="w-full">
            <GraphVisualization />
          </FloatingPanel>
        </div>

        {/* Footer */}
        <footer className="text-center mt-6 sm:mt-8 md:mt-12 pb-4 sm:pb-6 md:pb-8 px-4">
          <p className="text-gray-500 text-xs sm:text-sm">
            Powered by NASA GeneLab • Space Biology Database • Mars Research Initiative
          </p>
        </footer>
      </div>

      {/* Animated Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px]" />
      </div>
    </div>
  )
}