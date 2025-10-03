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
  glowColor = 'blue'
}: FloatingPanelProps) {
  const glowStyles: Record<string, string> = {
    cyan: 'shadow-[0_0_30px_rgba(59,130,246,0.2)] border-blue-400/40',
    blue: 'shadow-[0_0_30px_rgba(59,130,246,0.2)] border-blue-400/40',
    green: 'shadow-[0_0_30px_rgba(34,197,94,0.2)] border-green-500/40',
    purple: 'shadow-[0_0_30px_rgba(139,92,246,0.2)] border-purple-500/40',
  }

  return (
    <Card 
      className={cn(
        'bg-white/70 backdrop-blur-xl border-2 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] flex flex-col',
        glowStyles[glowColor],
        className
      )}
    >
      <div className="p-3 sm:p-4 border-b border-slate-300/50 shrink-0">
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-700 tracking-wide uppercase">
          {title}
        </h3>
      </div>
      <div className="p-3 sm:p-4 flex-1 overflow-auto min-h-0">
        {children}
      </div>
    </Card>
  )
}