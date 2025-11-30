"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur transition-all duration-300"
      style={{ borderBottomColor: "#00ffff", borderBottomWidth: "1px", boxShadow: "0 0 20px rgba(0, 255, 255, 0.1)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="#home"
            className="text-3xl font-bold transition-all duration-300"
            style={{
              color: "#39ff14",
              textShadow: "0 0 10px #39ff14",
            }}
          >
            BO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="px-6 py-2 rounded-full border font-medium text-sm transition-all duration-300 hover:scale-110"
                style={{
                  borderColor: "#ff006e",
                  color: "#ff006e",
                  animation: `neon-pink-glow 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 30px #ff006e"
                  e.currentTarget.style.transform = "translateY(-3px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 10px #ff006e"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Email Button */}
          <button
            className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border font-medium transition-all duration-300 hover:scale-110"
            style={{
              borderColor: "#b300ff",
              color: "#b300ff",
              boxShadow: "0 0 15px #b300ff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 40px #b300ff"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 15px #b300ff"
            }}
          >
            <Mail size={20} />
            <span>Email</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 transition-all duration-300"
            style={{ color: "#00ffff" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-bounce-in">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 rounded transition-all duration-300"
                style={{ color: "#ff006e" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
