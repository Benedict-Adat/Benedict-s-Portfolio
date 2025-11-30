"use client"

export default function About() {
  return (
    <section id="experience" className="py-20 bg-neutral-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold" style={{ animation: "glitch 3s ease-in-out infinite" }}>
            <span className="text-white">About </span>
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500"
              style={{ animation: "glitch 3s ease-in-out infinite" }}
            >
              Me
            </span>
          </h2>
          <div
            className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mt-6"
            style={{ animation: "neon-green-glow 2s ease-in-out infinite", boxShadow: "0 0 20px #39ff14" }}
          ></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Who I Am */}
          <div
            className="space-y-6 p-6 rounded-xl border-2"
            style={{
              borderColor: "#00ffff",
              animation: "bounce-in 0.6s ease-out, neon-glow 3s ease-in-out infinite",
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
            }}
          >
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400"
              style={{ animation: "pulse-scale 2s ease-in-out infinite" }}
            >
              Who I Am
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed hover:text-cyan-300 transition-colors duration-300">
              I'm a passionate Full Stack developer with 2+ years of experience building user-friendly web applications.
              I specialize in React, JavaScript, tailwindcss, Python and modern web technologies. My focus is on
              creating responsive, accessible, and performant applications that users love.
            </p>
          </div>

          {/* What I Do */}
          <div
            className="space-y-6 p-6 rounded-xl border-2"
            style={{
              borderColor: "#ff006e",
              animation: "bounce-in 0.8s ease-out, neon-pink-glow 3s ease-in-out infinite",
              boxShadow: "0 0 30px rgba(255, 0, 110, 0.3)",
            }}
          >
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
              style={{ animation: "pulse-scale 2s ease-in-out infinite 0.2s" }}
            >
              What I Do
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed hover:text-pink-300 transition-colors duration-300">
              I transform ideas into interactive digital experiences. From concept to deployment, I focus on creating
              responsive, accessible, and performant applications that users love. I work with modern technologies and
              best practices to deliver high-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
