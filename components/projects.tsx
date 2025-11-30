"use client"

const projects = [
  {
    title: "KONEGAN-3D Homes",
    description: "A 3D home visualization platform using cutting-edge web technologies",
    tags: ["React", "3D", "Web Design"],
  },
  {
    title: "KONEGAN",
    description: "Main platform for real estate and property management solutions",
    tags: ["React", "Full Stack", "UI/UX"],
  },
  {
    title: "Stock Market Simulator",
    description: "Interactive educational platform for learning stock market trading",
    tags: ["React", "JavaScript", "API Integration"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
          style={{
            color: "#39ff14",
            textShadow: "0 0 20px #39ff14, 0 0 40px #39ff14",
            animation: "neon-green-glow 3s ease-in-out infinite",
          }}
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-box bg-slate-900/50 hover:bg-slate-800/50 rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer"
              style={{
                animation: "bounce-in 0.8s ease-out",
                animationDelay: `${index * 0.2}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-15px) rotateZ(2deg)"
                e.currentTarget.style.borderColor = "#ff006e"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) rotateZ(0deg)"
                e.currentTarget.style.borderColor = "#39ff14"
              }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#b300ff", textShadow: "0 0 10px #b300ff" }}>
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
