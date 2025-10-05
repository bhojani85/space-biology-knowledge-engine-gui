"use client"

import { useState } from 'react'
import { FileText } from 'lucide-react'

interface ArticleFlipCardProps {
  title: string
  summary: string
}

export default function ArticleFlipCard({ title, summary }: ArticleFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="perspective-1000 h-48 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side - Article Title */}
        <div className="absolute inset-0 backface-hidden rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500/50 transition-colors">
          <FileText className="w-8 h-8 text-cyan-400 mb-3" />
          <h3 className="text-sm font-semibold text-gray-200 line-clamp-3">
            {title}
          </h3>
          <p className="text-xs text-gray-500 mt-2">Click to view summary</p>
        </div>

        {/* Back Side - Article Summary */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-lg border border-cyan-500/50 bg-gradient-to-br from-cyan-900/20 to-gray-900/90 backdrop-blur-sm p-4 overflow-y-auto scrollbar-hide">
          <div className="h-full flex flex-col">
            <h4 className="text-xs font-bold text-cyan-400 mb-2">{title}</h4>
            <p className="text-xs text-gray-300 leading-relaxed flex-1">
              {summary}
            </p>
            <p className="text-xs text-gray-500 mt-2 text-center">Click to flip back</p>
          </div>
        </div>
      </div>
    </div>
  )
}