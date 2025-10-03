"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, Info, BarChart3 } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/about', label: 'About', icon: Info },
    { href: '/statistics', label: 'Statistics', icon: BarChart3 },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              NASA Lab
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            {links.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-400 glow-cyan'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline text-sm font-medium">{label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}