"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const technologies = [
  "Python",
  "TensorFlow",
  "OpenCV",
  "Flask",
  "RAG",
  "NLP",
]

const features = [
  {
    title: "CNN Architecture",
    description: "Deep learning model trained on 12,000+ eye images",
    value: "96.4%",
    label: "Accuracy",
  },
  {
    title: "Real-time Processing",
    description: "Fast inference for instant diagnosis",
    value: "<2s",
    label: "Response Time",
  },
  {
    title: "Multiple Conditions",
    description: "Detects cataracts, glaucoma, and retinal diseases",
    value: "8+",
    label: "Conditions",
  },
]

export default function VisionGuardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [scanProgress, setScanProgress] = useState(0)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer)
            setShowResult(true)
            return 100
          }
          return prev + 2
        })
      }, 50)
      return () => clearInterval(timer)
    }
  }, [isInView])

  return (
    <section id="vision-guard" className="relative py-32 px-4 overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 border border-primary/30"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-primary">Featured Project</span>
            <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">Flagship</span>
          </motion.div>
          <span className="block text-primary text-sm font-mono tracking-widest uppercase">AI-Powered Healthcare</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Vision<span className="text-primary">Guard</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            AI-Based Eye Defect Detection and Vision Assistance System. 
            Leveraging deep learning to democratize eye health diagnostics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Eye Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
              
              {/* Scanner rings */}
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Outer ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/30"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="160"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="10 5"
                  className="text-primary/40"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 200 200"
                    to="360 200 200"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Eye shape */}
                <ellipse
                  cx="200"
                  cy="200"
                  rx="120"
                  ry="70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-foreground/80"
                />

                {/* Iris */}
                <circle
                  cx="200"
                  cy="200"
                  r="55"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-primary"
                />
                
                {/* Iris detail */}
                <circle
                  cx="200"
                  cy="200"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/50"
                />

                {/* Pupil */}
                <circle
                  cx="200"
                  cy="200"
                  r="22"
                  className="fill-primary"
                />
                
                {/* Pupil highlight */}
                <circle
                  cx="190"
                  cy="190"
                  r="6"
                  className="fill-white/80"
                />

                {/* Scanner beam */}
                <motion.line
                  x1="80"
                  y1="200"
                  x2="320"
                  y2="200"
                  stroke="cyan"
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { 
                    opacity: [0, 1, 1, 0],
                    y1: [130, 270, 130],
                    y2: [130, 270, 130]
                  } : {}}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Corner markers */}
                <path d="M60 100 L60 60 L100 60" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
                <path d="M340 100 L340 60 L300 60" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
                <path d="M60 300 L60 340 L100 340" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
                <path d="M340 300 L340 340 L300 340" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>

              {/* HUD overlay */}
              <div className="absolute top-4 left-4 text-xs font-mono text-primary">
                <div>SCAN MODE: ACTIVE</div>
                <div className="text-muted-foreground">RES: 1024x1024</div>
              </div>
              <div className="absolute top-4 right-4 text-xs font-mono text-right text-primary">
                <div>AI MODEL: v2.4</div>
                <div className="text-muted-foreground">CNN LAYERS: 12</div>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-muted-foreground">Analyzing...</span>
                  <span className="text-primary">{scanProgress}%</span>
                </div>
                <div className="h-1 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary neon-glow"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
              </div>

              {/* Result overlay */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="glass-card p-6 rounded-2xl text-center">
                    <div className="text-emerald-400 text-5xl font-bold mb-2">96.4%</div>
                    <div className="text-sm text-muted-foreground">Confidence Score</div>
                    <div className="mt-4 px-4 py-2 bg-emerald-400/10 rounded-lg text-emerald-400 text-sm">
                      Result: Healthy
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-3 py-1 text-sm font-mono bg-primary/10 text-primary rounded-lg border border-primary/20"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Feature cards */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="glass-card p-4 rounded-xl flex items-center gap-4"
                >
                  <div className="text-center min-w-[80px]">
                    <div className="text-2xl font-bold text-primary">{feature.value}</div>
                    <div className="text-xs text-muted-foreground">{feature.label}</div>
                  </div>
                  <div className="border-l border-border pl-4">
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://github.com/yakshteja2004/Vision"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl neon-glow transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Repository
              </motion.a>
              <motion.a
                href="https://github.com/yakshteja2004/Vision"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 glass-card font-semibold rounded-xl hover:bg-secondary/50 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
