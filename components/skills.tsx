"use client"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Responsive Design", "Figma"],
  },
  {
    category: "Backend & Tools",
    skills: ["Node.js", "Git", "Agile/Scrum", "Version Control", "Performance Optimization"],
  },
  {
    category: "Design & UX",
    skills: ["UI/UX Design", "Wireframing", "Prototyping", "User Research"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
          style={{
            color: "#ff006e",
            textShadow: "0 0 20px #ff006e, 0 0 40px #ff006e",
            animation: "neon-pink-glow 3s ease-in-out infinite",
          }}
        >
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-box bg-slate-900/50 rounded-2xl p-6 border-2 transition-all duration-300"
              style={{
                borderColor: "#b300ff",
                animation: "float 6s ease-in-out infinite",
                animationDelay: `${index * 0.3}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08) rotateY(10deg)"
                e.currentTarget.style.borderColor = "#00ffff"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) rotateY(0deg)"
                e.currentTarget.style.borderColor = "#b300ff"
              }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#39ff14", textShadow: "0 0 10px #39ff14" }}>
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-gray-300 transition-all duration-300"
                    style={{ animation: "bounce-in 0.6s ease-out", animationDelay: `${i * 0.1}s` }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: "#ff006e",
                        boxShadow: "0 0 10px #ff006e",
                        animation: "pulse-scale 2s ease-in-out infinite",
                      }}
                    ></span>
                    <span className="hover:text-cyan-400 cursor-pointer">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
