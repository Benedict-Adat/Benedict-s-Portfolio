"use client"

import { Mail, Phone, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "benedictokonefficong@gmail.com",
    href: "mailto:benedictokonefficong@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 906 406 7870",
    href: "tel:+2349064067870",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Abuja, Nigeria",
    href: "#",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
          style={{
            color: "#00ffff",
            textShadow: "0 0 20px #00ffff, 0 0 40px #00ffff",
            animation: "neon-glow 3s ease-in-out infinite",
          }}
        >
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <a
                key={index}
                href={info.href}
                className="card-box bg-slate-900/50 rounded-2xl p-6 border-2 flex flex-col items-center text-center cursor-pointer group transition-all duration-300"
                style={{
                  borderColor: "#ff006e",
                  animation: "bounce-in 0.8s ease-out",
                  animationDelay: `${index * 0.2}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-20px) scale(1.05)"
                  e.currentTarget.style.borderColor = "#b300ff"
                  e.currentTarget.style.boxShadow = "0 20px 50px rgba(179, 0, 255, 0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)"
                  e.currentTarget.style.borderColor = "#ff006e"
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 0, 110, 0.2)"
                }}
              >
                <Icon
                  className="w-12 h-12 mb-4 transition-all duration-300"
                  style={{
                    color: "#39ff14",
                    filter: "drop-shadow(0 0 10px #39ff14)",
                  }}
                />
                <h3 className="text-lg font-semibold text-gray-300 mb-2">{info.label}</h3>
                <p
                  className="font-semibold hover:underline"
                  style={{
                    color: "#ff006e",
                    textShadow: "0 0 10px #ff006e",
                  }}
                >
                  {info.value}
                </p>
              </a>
            )
          })}
        </div>

        <div className="flex justify-center">
          <button
            className="px-8 py-3 rounded-full font-bold text-lg transition-all duration-300"
            style={{
              background: "#b300ff",
              color: "#fff",
              boxShadow: "0 0 30px #b300ff",
              animation: "pulse-scale 2s ease-in-out infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 60px #b300ff, 0 0 100px #b300ff"
              e.currentTarget.style.transform = "scale(1.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 30px #b300ff"
              e.currentTarget.style.transform = "scale(1)"
            }}
          >
            Send Me An Email
          </button>
        </div>
      </div>
    </section>
  )
}
