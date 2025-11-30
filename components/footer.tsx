"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-neutral-900 py-12 relative overflow-hidden">
      <div className="absolute inset-0 top-0 h-px bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Name and Title */}
          <div className="group">
            <h3
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-green-400 animate-pulse"
              style={{
                animation: "glitch 3s ease-in-out infinite, pulse 2s ease-in-out infinite",
              }}
            >
              Benedict Okon-Effiong
            </h3>
            <p
              className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            >
              Full stack Developer & Creative Problem Solver
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-cyan-400 rounded-full text-cyan-400 hover:text-pink-500 hover:border-pink-500 transition-all duration-300 hover:scale-110"
              style={{
                animation: "neon-glow 3s ease-in-out infinite, rotate-fast 8s linear infinite",
              }}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-pink-500 rounded-full text-pink-500 hover:text-green-400 hover:border-green-400 transition-all duration-300 hover:scale-110"
              style={{
                animation: "neon-pink-glow 3s ease-in-out infinite",
                animationDelay: "0.3s",
              }}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:benedictokonefficong@gmail.com"
              className="p-3 border border-purple-600 rounded-full text-purple-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
              style={{
                animation: "neon-green-glow 3s ease-in-out infinite",
                animationDelay: "0.6s",
              }}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-cyan-400/20 via-pink-500/20 to-purple-600/20 mt-8 pt-8 text-center">
          <p
            className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 animate-pulse"
            style={{
              animation: "fadeInSlide 2s ease-in-out infinite",
            }}
          >
            © {currentYear} Benedict Okon-Effiong. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInSlide {
          0% {
            opacity: 0.7;
            transform: translateX(0);
          }
          50% {
            opacity: 1;
            transform: translateX(5px);
          }
          100% {
            opacity: 0.7;
            transform: translateX(0);
          }
        }
      `}</style>
    </footer>
  )
}
