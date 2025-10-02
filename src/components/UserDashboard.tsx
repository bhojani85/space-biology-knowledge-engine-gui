"use client"

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Download, Save, History } from 'lucide-react'

export default function UserDashboard() {
  return (
    <div className="h-full overflow-auto">
      <div className="space-y-4 sm:space-y-6">
        {/* User Profile */}
        <div className="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-cyan-500/20">
          <Avatar className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-cyan-500/50 shadow-[0_0_15px_rgba(0,255,255,0.3)] shrink-0">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop" />
            <AvatarFallback className="bg-cyan-500/20 text-cyan-400">RX</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <h4 className="font-semibold text-cyan-300 text-sm sm:text-base truncate">Researcher X</h4>
            <p className="text-[10px] sm:text-xs text-gray-400 truncate">NASA Space Biology</p>
            <Badge variant="outline" className="text-[10px] sm:text-xs mt-1 border-cyan-500/40 text-cyan-400">
              Premium Access
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div className="bg-cyan-500/10 rounded-lg p-2.5 sm:p-3 border border-cyan-500/30">
            <p className="text-xl sm:text-2xl font-bold text-cyan-400">24</p>
            <p className="text-[10px] sm:text-xs text-gray-400">Saved Chats</p>
          </div>
          <div className="bg-purple-500/10 rounded-lg p-2.5 sm:p-3 border border-purple-500/30">
            <p className="text-xl sm:text-2xl font-bold text-purple-400">12</p>
            <p className="text-[10px] sm:text-xs text-gray-400">Visualizations</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h5 className="text-xs sm:text-sm font-semibold text-cyan-300 mb-2 sm:mb-3 flex items-center gap-2">
            <History className="w-3 h-3 sm:w-4 sm:h-4" />
            Recent Activity
          </h5>
          <div className="space-y-1.5 sm:space-y-2">
            {[
              { title: 'GeneLab RNA Analysis', time: '2h ago' },
              { title: 'Veggie Growth Study', time: '5h ago' },
              { title: 'Mars Soil Composition', time: '1d ago' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-2 rounded-lg bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-all cursor-pointer"
              >
                <p className="text-[10px] sm:text-xs font-medium text-gray-300 truncate">{item.title}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-1.5 sm:space-y-2 pt-2">
          <Button 
            variant="outline" 
            className="w-full border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/50 text-xs sm:text-sm h-8 sm:h-9"
            size="sm"
          >
            <Save className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Save Current Session
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-500/50 text-xs sm:text-sm h-8 sm:h-9"
            size="sm"
          >
            <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Export Data
          </Button>
        </div>
      </div>
    </div>
  )
}