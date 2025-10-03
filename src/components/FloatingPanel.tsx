"use client"

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FloatingPanelProps {
  children: ReactNode
  title: string
  glowColor?: 'cyan' | 'purple' | 'green'
  className?: string
}

export default function FloatingPanel({ children, title, glowColor = 'cyan', className = '' }: FloatingPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-xl backdrop-blur-md bg-black/40 border border-gray-500/30 shadow-[0_0_30px_rgba(107,114,128,0.3)] ${className}`}
    >
      {/* Header */}
      <div className="border-b border-gray-500/30 px-4 sm:px-6 py-3 sm:py-4">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-300 tracking-wider">
          {title}
        </h2>
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-6 h-full overflow-auto scrollbar-hide">
        {children}
      </div>
    </motion.div>
  )
}