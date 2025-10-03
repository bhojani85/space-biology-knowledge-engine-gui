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
  const glowClasses = {
    cyan: 'glow-cyan',
    purple: 'glow-purple',
    green: 'glow-green'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-xl backdrop-blur-md bg-black/40 border border-cyan-500/30 ${glowClasses[glowColor]} ${className}`}
    >
      {/* Header */}
      <div className="border-b border-cyan-500/30 px-4 sm:px-6 py-3 sm:py-4">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-cyan-400 tracking-wider">
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