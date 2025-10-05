"use client"

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ArticleFlipCard from '@/components/ArticleFlipCard'
import FloatingChatbot from '@/components/FloatingChatbot'
import { Sparkles, Search } from 'lucide-react'

// Use next/dynamic instead of React.lazy for better Next.js compatibility
const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-zinc-900/20 to-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-gray-500 animate-pulse">Loading 3D scene...</div>
      </div>
    </div>
  )
})

// Mock article data
const mockArticles = [
  {
    id: 1,
    title: "Impact of Microgravity on Gene Expression in Space Biology",
    summary: "This study examines how microgravity environments affect cellular gene expression patterns in various organisms. Research conducted on the ISS shows significant changes in metabolic pathways and stress response mechanisms."
  },
  {
    id: 2,
    title: "Mars Regolith Analysis: Chemical Composition and Biological Implications",
    summary: "Comprehensive analysis of Martian soil samples reveals complex mineralogy and potential resources for future missions. The study explores implications for in-situ resource utilization and potential biomarkers."
  },
  {
    id: 3,
    title: "Plant Growth Systems in Controlled Space Environments",
    summary: "Investigation of the Veggie plant growth system aboard the ISS demonstrates successful cultivation of leafy greens. Results show adaptation mechanisms and nutritional content analysis for long-duration missions."
  },
  {
    id: 4,
    title: "Radiation Effects on Cellular DNA Repair Mechanisms",
    summary: "Study of cosmic radiation impact on DNA repair pathways in human cells. Findings indicate enhanced repair activity and potential countermeasures for astronaut protection during deep space missions."
  },
  {
    id: 5,
    title: "Microbial Adaptation to Space Station Environmental Conditions",
    summary: "Analysis of microbial communities in spacecraft environments reveals unique adaptation strategies. Research implications for spacecraft hygiene protocols and potential biotechnology applications."
  },
  {
    id: 6,
    title: "Bone Density Loss Prevention Through Exercise Protocols",
    summary: "Evaluation of resistance exercise protocols effectiveness in preventing bone density loss during extended spaceflight. Data from long-duration missions shows promising results for crew health maintenance."
  },
  {
    id: 7,
    title: "Cardiovascular System Adaptation to Weightlessness",
    summary: "Longitudinal study of cardiovascular changes during space missions. Research explores fluid shifts, blood pressure regulation, and potential interventions for maintaining cardiovascular health."
  },
  {
    id: 8,
    title: "Protein Crystal Growth in Microgravity for Drug Development",
    summary: "Analysis of protein crystallization experiments in space reveals higher quality crystal structures. Applications for pharmaceutical research and structure-based drug design are discussed."
  },
  {
    id: 9,
    title: "Sleep Patterns and Circadian Rhythms in Space Flight",
    summary: "Investigation of astronaut sleep quality and circadian rhythm disruption in space. Study examines effects of artificial lighting and operational schedules on crew performance and health."
  },
  {
    id: 10,
    title: "Immunological Changes During Extended Space Missions",
    summary: "Research on immune system function alterations in astronauts during long-duration spaceflights. Findings show temporary immune suppression and implications for mission planning and crew health."
  },
  {
    id: 11,
    title: "Water Recovery Systems and Closed-Loop Life Support",
    summary: "Technical analysis of water recycling systems aboard the ISS. Study evaluates efficiency, contamination risks, and improvements for sustainable long-term space habitation."
  },
  {
    id: 12,
    title: "Neural Plasticity and Sensorimotor Adaptation in Microgravity",
    summary: "Neurological study of how the brain adapts to weightlessness. Research explores sensorimotor integration changes and implications for mission training and rehabilitation protocols."
  }
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = mockArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-900/20 to-black">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen pt-16 sm:pt-20 p-3 sm:p-4 md:p-6">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8 pt-4 sm:pt-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="w-5 h-5 sm:w-6 md:w-8 sm:h-6 md:h-8 text-gray-400 animate-pulse" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-clip-text text-transparent">
              Space Biology Engine
            </h1>
            <Sparkles className="w-5 h-5 sm:w-6 md:w-8 sm:h-6 md:h-8 text-gray-400 animate-pulse" />
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg px-4">
            NASA Research Console • AI-Powered Knowledge Discovery
          </p>
        </header>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search space biology articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            />
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredArticles.map((article) => (
              <ArticleFlipCard
                key={article.id}
                title={article.title}
                summary={article.summary}
              />
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles found matching your search.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-6 sm:mt-8 md:mt-12 pb-4 sm:pb-6 md:pb-8 px-4">
          <p className="text-gray-500 text-xs sm:text-sm">
            Powered by NASA GeneLab • Space Biology Database • Mars Research Initiative
          </p>
        </footer>
      </div>

      {/* Floating Chatbot Button */}
      <FloatingChatbot />

      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(156,163,175,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(156,163,175,0.1)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px]" />
      </div>
    </div>
  )
}