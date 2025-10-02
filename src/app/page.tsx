"use client"

import Scene3D from '@/components/Scene3D'
import FloatingPanel from '@/components/FloatingPanel'
import ChatbotInterface from '@/components/ChatbotInterface'
import DatasetBrowser from '@/components/DatasetBrowser'
import GraphVisualization from '@/components/GraphVisualization'
import UserDashboard from '@/components/UserDashboard'
import { Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-blue-950/20 to-black">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen p-3 sm:p-4 md:p-6">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8 md:mb-12 pt-4 sm:pt-6 md:pt-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="w-5 h-5 sm:w-6 md:w-8 sm:h-6 md:h-8 text-cyan-400 animate-pulse" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Space Biology Engine
            </h1>
            <Sparkles className="w-5 h-5 sm:w-6 md:w-8 sm:h-6 md:h-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg px-4">NASA Research Console • AI-Powered Knowledge Discovery</p>
        </header>

        {/* Floating Panels Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {/* Left Panel - Datasets */}
          <FloatingPanel title="NASA Datasets" glowColor="green" className="h-[400px] sm:h-[500px] lg:h-[600px]">
            <DatasetBrowser />
          </FloatingPanel>

          {/* Center Panel - Chatbot */}
          <FloatingPanel title="AI Research Assistant" glowColor="cyan" className="h-[400px] sm:h-[500px] lg:h-[600px]">
            <ChatbotInterface />
          </FloatingPanel>

          {/* Right Panel - User Dashboard */}
          <FloatingPanel title="User Dashboard" glowColor="cyan" className="h-[400px] sm:h-[500px] lg:h-[600px]">
            <UserDashboard />
          </FloatingPanel>
        </div>

        {/* Bottom Panel - Visualizations */}
        <div className="max-w-7xl mx-auto mt-3 sm:mt-4 md:mt-6">
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