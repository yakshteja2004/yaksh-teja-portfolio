"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const skills = [
  { name: "Python", category: "Languages", level: 95 },
  { name: "SQL", category: "Languages", level: 85 },
  { name: "Pandas", category: "Data Science", level: 92 },
  { name: "NumPy", category: "Data Science", level: 90 },
  { name: "Scikit-Learn", category: "ML", level: 88 },
  { name: "TensorFlow", category: "ML", level: 85 },
  { name: "OpenCV", category: "Computer Vision", level: 80 },
  { name: "Machine Learning", category: "AI", level: 88 },
  { name: "Deep Learning", category: "AI", level: 82 },
  { name: "RAG", category: "AI", level: 75 },
  { name: "NLP", category: "AI", level: 78 },
  { name: "Power BI", category: "Analytics", level: 85 },
  { name: "Tableau", category: "Analytics", level: 80 },
  { name: "AWS", category: "Cloud", level: 70 },
  { name: "Azure", category: "Cloud", level: 65 },
  { name: "GitHub", category: "Tools", level: 90 },
]

const categories = ["All", "Languages", "Data Science", "ML", "AI", "Analytics", "Cloud", "Tools"]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="relative py-32 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-mono tracking-widest uppercase">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and deriving insights from data
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground neon-glow"
                  : "glass hover:bg-secondary/50 text-muted-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-card p-4 rounded-xl text-center cursor-pointer overflow-hidden"
              >
                {/* Glow effect on hover */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    layoutId="skillGlow"
                    className="absolute inset-0 bg-primary/10 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                
                {/* Skill content */}
                <div className="relative z-10">
                  <div className="text-foreground font-medium mb-2">{skill.name}</div>
                  
                  {/* Progress bar */}
                  <div className="h-1 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/60"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                    />
                  </div>
                  
                  {/* Level indicator */}
                  <div className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.level}%
                  </div>
                </div>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/30 group-hover:neon-border transition-all" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating skill particles - decorative */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0,
              }}
              animate={{
                y: [null, "-20%"],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
