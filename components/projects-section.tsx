"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const projects = [
  {
    title: "Breast Cancer Detection",
    description: "Medical AI for early breast cancer detection using diagnostic features and classification algorithms",
    tags: ["Python", "Classification", "Healthcare", "Scikit-Learn"],
    repoUrl: "https://github.com/yakshteja2004/Internpe",
    stats: { accuracy: "97%", sensitivity: "95%" },
    internship: "InternPe",
  },
  {
    title: "Diabetes Prediction",
    description: "Machine learning model to predict diabetes risk based on medical and lifestyle indicators",
    tags: ["Python", "ML", "Pandas", "NumPy"],
    repoUrl: "https://github.com/yakshteja2004/Internpe",
    stats: { accuracy: "85%", features: "8" },
    internship: "InternPe",
  },
  {
    title: "Fraud Detection",
    description: "Anomaly detection system for identifying fraudulent transactions using advanced classification",
    tags: ["Python", "ML", "Classification", "Analytics"],
    repoUrl: "https://github.com/yakshteja2004/Oasis-Infobyte",
    stats: { precision: "94%", recall: "91%" },
    internship: "Oasis Infobyte",
  },
  {
    title: "Sentiment Analysis",
    description: "NLP-based sentiment classification for customer reviews and social media content analysis",
    tags: ["Python", "NLP", "NLTK", "Text Mining"],
    repoUrl: "https://github.com/yakshteja2004/Oasis-Infobyte",
    stats: { accuracy: "88%", reviews: "50K+" },
    internship: "Oasis Infobyte",
  },
  {
    title: "Wine Quality Prediction",
    description: "Regression and classification model to predict wine quality based on chemical properties",
    tags: ["Python", "Regression", "Data Analysis"],
    repoUrl: "https://github.com/yakshteja2004/Oasis-Infobyte",
    stats: { r2Score: "0.82", samples: "6K+" },
    internship: "Oasis Infobyte",
  },
  {
    title: "Retail Sales Analysis",
    description: "Comprehensive sales data analysis with trend identification and business insights generation",
    tags: ["Python", "Pandas", "Visualization", "EDA"],
    repoUrl: "https://github.com/yakshteja2004/Internpe",
    stats: { insights: "15+", period: "12mo" },
    internship: "InternPe",
  },
  {
    title: "Quikr Price Prediction",
    description: "Regression model for predicting product prices on marketplace platforms with feature engineering",
    tags: ["Python", "Regression", "Feature Eng.", "ML"],
    repoUrl: "https://github.com/yakshteja2004/Internpe",
    stats: { r2Score: "0.85", products: "10K+" },
    internship: "InternPe",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-32 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of data science and machine learning projects from my internships and personal work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full glass-card rounded-2xl p-6 overflow-hidden"
              >
                {/* Internship badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20">
                    {project.internship}
                  </span>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition-all duration-300" />
                
                {/* Glow effect */}
                {hoveredProject === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl"
                  />
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:neon-glow transition-all">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 mb-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover action */}
                  <div className="mt-4 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/yakshteja2004"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass-card font-semibold rounded-xl hover:bg-secondary/50 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
