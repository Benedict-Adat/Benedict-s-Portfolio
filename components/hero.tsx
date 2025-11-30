"use client"

import { ArrowRight, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  // Function to scroll to the contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-[80vh] flex items-center py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-white">Hi, I'm </span>
                <span
                  className="inline-block animate-pulse"
                  style={{ color: "#00ffff", animation: "glitch 3s infinite" }}
                >
                  Benedict
                </span>
              </h1>
              <p className="text-2xl font-semibold" style={{ color: "#ff006e", textShadow: "0 0 10px #ff006e" }}>
                Full stack Developer & UI/UX Designer
              </p>
            </div>

            <p
              className="text-gray-300 text-lg leading-relaxed max-w-xl"
              style={{ animation: "bounce-in 0.8s ease-out" }}
            >
              I create beautiful, responsive web experiences with a passion for clean code and user-centered design.
              Based in Nigeria, working on innovative digital solutions.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {["React", "JavaScript", "Frontend", "UI/UX", "HTML & CSS", "Git", "Node.js", "Responsive"].map(
                (skill, i) => (
                  <span key={skill} className="skill-tag" style={{ animationDelay: `${i * 0.1}s` }}>
                    {skill}
                  </span>
                ),
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-8">
              <button
                className="px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all duration-300"
                style={{
                  background: "#39ff14",
                  color: "#000",
                  boxShadow: "0 0 20px #39ff14",
                  animation: "pulse-scale 2s ease-in-out infinite",
                }}
              >
                View My Work
                <ArrowRight size={20} />
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2"
                style={{
                  borderWidth: "2px",
                  borderColor: "#ff006e",
                  color: "#ff006e",
                  boxShadow: "0 0 20px #ff006e",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)"
                  e.currentTarget.style.boxShadow = "0 0 40px #ff006e"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.boxShadow = "0 0 20px #ff006e"
                }}
              >
                <Mail size={20} />
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-sm aspect-square rounded-3xl overflow-hidden flex items-center justify-center relative"
              style={{
                borderWidth: "3px",
                borderColor: "#00ffff",
                boxShadow: "0 0 30px #00ffff, inset 0 0 20px rgba(0, 255, 255, 0.1)",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/whatsapp-20image-202025-10-13-20at-2019.jpg"
                  alt="Benedict Okon-Effiong"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
