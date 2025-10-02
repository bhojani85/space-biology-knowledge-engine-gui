"use client"

import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { Badge } from './ui/badge'
import { Send, Sparkles } from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  citations?: string[]
}

export default function ChatbotInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Welcome to the Space Biology Knowledge Engine. Ask me anything about NASA datasets, space biology experiments, or planetary research.',
      isUser: false,
      citations: ['NASA GeneLab', 'Space Biology Database']
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Based on the NASA datasets, here's what I found about "${input}": Space biology experiments show significant data patterns. The GeneLab database contains comprehensive gene expression data from space missions.`,
        isUser: false,
        citations: ['GeneLab RNA-Seq', 'Veggie Study 2023', 'Mars Regolith Analysis']
      }
      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="flex-1 overflow-auto min-h-0 pr-2 sm:pr-4 mb-3 sm:mb-4">
        <div className="space-y-3 sm:space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-300`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl p-3 sm:p-4 ${
                  message.isUser
                    ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-100'
                    : 'bg-purple-500/20 border border-purple-500/40 text-purple-100'
                }`}
              >
                <p className="text-xs sm:text-sm leading-relaxed">{message.text}</p>
                {message.citations && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                    {message.citations.map((citation, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-[10px] sm:text-xs bg-cyan-500/10 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 cursor-pointer"
                      >
                        {citation}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-purple-500/20 border border-purple-500/40 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 animate-pulse" />
                  <span className="text-xs sm:text-sm text-purple-200">Analyzing data...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2 shrink-0">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about space biology..."
          className="text-xs sm:text-sm bg-black/40 border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/30"
          disabled={isLoading}
        />
        <Button
          onClick={handleSend}
          disabled={isLoading}
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-4 sm:px-6 shadow-[0_0_20px_rgba(0,255,255,0.4)]"
          size="sm"
        >
          <Send className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </div>
    </div>
  )
}