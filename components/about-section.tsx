"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const highlights = [
  {
    title: "Data Science",
    description: "Transforming raw data into actionable insights through advanced analytics and visualization",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Artificial Intelligence",
    description: "Building intelligent systems that learn, adapt, and solve complex real-world problems",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Machine Learning",
    description: "Developing predictive models and algorithms that improve through experience",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Analytics",
    description: "Uncovering patterns and trends that drive data-informed decision making",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
]

const timeline = [
  {
    year: "2022",
    title: "Started B.Tech Journey",
    description: "Began my undergraduate studies in Computer Science, laying the foundation for my tech career",
    isActive: true,
  },
  {
    year: "2023",
    title: "Discovered Data Science & Python",
    description: "Immersed myself in Python programming and discovered my passion for data science and analytics",
    isActive: true,
  },
  {
    year: "2024",
    title: "Built ML & Analytics Projects",
    description: "Developed multiple machine learning models including classification, regression, and prediction systems",
    isActive: true,
  },
  {
    year: "2025",
    title: "Completed InternPe Internship",
    description: "Worked on Breast Cancer Detection, Diabetes Prediction, Retail Sales Analysis, and Quikr Price Prediction",
    isActive: true,
  },
  {
    year: "2025",
    title: "Completed Oasis Infobyte Internship",
    description: "Developed Fraud Detection, Sentiment Analysis, Wine Quality Prediction, and performed advanced EDA",
    isActive: true,
  },
  {
    year: "2026",
    title: "Developed Vision Guard",
    description: "Created AI-Based Eye Defect Detection and Vision Assistance System with 96.4% accuracy",
    isActive: true,
    featured: true,
  },
  {
    year: "Future",
    title: "Aspiring AI Engineer",
    description: "Goal: Become an AI Engineer and Data Scientist building impactful intelligent systems",
    isActive: false,
    isFuture: true,
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Passionate About{" "}
            <span className="gradient-text">Data science & AI</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I&apos;m an AI Engineer and Data Scientist based in Hyderabad, India, 
            dedicated to building intelligent systems that create real-world impact. 
            My expertise spans machine learning, deep learning, and computer vision.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:neon-glow transition-all">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            My <span className="gradient-text">Journey</span>
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

            {timeline.map((item, index) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                className={`relative flex items-start mb-8 md:mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 ${item.featured ? 'w-6 h-6' : 'w-4 h-4'} rounded-full bg-primary ${item.isActive ? 'neon-glow' : 'opacity-50'} z-10`}>
                  {item.featured && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className={`glass-card p-4 md:p-5 rounded-xl ${item.featured ? 'border border-primary/30' : ''} ${item.isFuture ? 'border border-dashed border-primary/50' : ''}`}
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono mb-2 ${item.isFuture ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'}`}>
                      {item.year}
                    </span>
                    <h4 className={`text-lg font-semibold ${item.featured ? 'text-primary' : ''}`}>{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    {item.featured && (
                      <div className="mt-3 flex items-center gap-2 justify-end md:justify-start">
                        <span className="text-xs text-emerald-400 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Flagship Project
                        </span>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
