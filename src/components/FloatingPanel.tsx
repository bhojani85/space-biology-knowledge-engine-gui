"use client"

import { ReactNode } from 'react'
import { Card } from './ui/card'
import { cn } from '@/lib/utils'

interface FloatingPanelProps {
  title: string
  children: ReactNode
  className?: string
  glowColor?: string
}

export default function FloatingPanel({ 
  title, 
  children, 
  className,
  glowColor = 'cyan'
}: FloatingPanelProps) {
  const glowStyles: Record<string, string> = {
    cyan: 'shadow-[0_0_30px_rgba(0,255,255,0.3)] border-cyan-500/30',
    green: 'shadow-[0_0_30px_rgba(0,255,0,0.3)] border-green-500/30',
    purple: 'shadow-[0_0_30px_rgba(139,92,246,0.3)] border-purple-500/30',
  }

  return (
    <Card 
      className={cn(
        'bg-black/80 backdrop-blur-xl border-2 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] flex flex-col',
        glowStyles[glowColor],
        className
      )}
    >
      <div className="p-3 sm:p-4 border-b border-white/10 shrink-0">
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-cyan-400 tracking-wide uppercase">
          {title}
        </h3>
      </div>
      <div className="p-3 sm:p-4 flex-1 overflow-auto min-h-0">
        {children}
      </div>
    </Card>
  )
}