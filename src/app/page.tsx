"use client"

import Scene3D from '@/components/Scene3D'
import FloatingPanel from '@/components/FloatingPanel'
import ChatbotInterface from '@/components/ChatbotInterface'
import Navbar from '@/components/Navbar'
import { Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-200 via-sky-300 to-slate-300">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen pt-16 sm:pt-20 p-3 sm:p-4 md:p-6">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8 md:mb-12 pt-4 sm:pt-6 md:pt-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="w-5 h-5 sm:w-6 md:w-8 sm:h-6 md:h-8 text-blue-600 animate-pulse" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-700 via-slate-600 to-blue-800 bg-clip-text text-transparent">
              Space Biology Engine
            </h1>
            <Sparkles className="w-5 h-5 sm:w-6 md:w-8 sm:h-6 md:h-8 text-slate-600 animate-pulse" />
          </div>
          <p className="text-slate-700 text-sm sm:text-base md:text-lg px-4">NASA Research Console • AI-Powered Knowledge Discovery</p>
        </header>

        {/* Chatbot Panel */}
        <div className="max-w-4xl mx-auto">
          <FloatingPanel title="AI Research Assistant" glowColor="blue" className="h-[500px] sm:h-[600px] lg:h-[700px]">
            <ChatbotInterface />
          </FloatingPanel>
        </div>

        {/* Footer */}
        <footer className="text-center mt-6 sm:mt-8 md:mt-12 pb-4 sm:pb-6 md:pb-8 px-4">
          <p className="text-slate-600 text-xs sm:text-sm">
            Powered by NASA GeneLab • Space Biology Database • Mars Research Initiative
          </p>
        </footer>
      </div>

      {/* Cloudy Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.1)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px]" />
      </div>
    </div>
  )
}