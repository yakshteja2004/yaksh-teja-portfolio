"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const codeLines = [
  "import pandas as pd",
  "import numpy as np",
  "import tensorflow as tf",
  "from sklearn.model_selection import train_test_split",
  "",
  "# Loading Vision Guard Dataset",
  "df = pd.read_csv('eye_defects.csv')",
  "X_train, X_test = train_test_split(df)",
  "",
  "model = tf.keras.Sequential([",
  "    tf.keras.layers.Conv2D(64, (3,3)),",
  "    tf.keras.layers.MaxPooling2D(),",
  "    tf.keras.layers.Dense(128, activation='relu'),",
  "])",
]

const terminalLogs = [
  { text: "$ python vision_guard.py", type: "command" },
  { text: "Loading dataset...", type: "info" },
  { text: "Dataset loaded: 12,847 samples", type: "success" },
  { text: "Preprocessing images...", type: "info" },
  { text: "Running data augmentation...", type: "info" },
  { text: "Initializing CNN model...", type: "info" },
  { text: "Training AI Model...", type: "info" },
  { text: "Epoch 1/100 - loss: 0.8234 - acc: 0.6521", type: "log" },
  { text: "Epoch 25/100 - loss: 0.3421 - acc: 0.8734", type: "log" },
  { text: "Epoch 50/100 - loss: 0.1523 - acc: 0.9234", type: "log" },
  { text: "Epoch 100/100 - loss: 0.0834 - acc: 0.9640", type: "success" },
  { text: "Model accuracy: 96.4%", type: "success" },
  { text: "Saving model weights...", type: "info" },
  { text: "Vision Guard ready for deployment!", type: "success" },
]

const visionGuardLogs = [
  { text: "Eye Scan Detected", type: "info" },
  { text: "Processing Eye Image...", type: "info" },
  { text: "Running CNN Model...", type: "info" },
  { text: "Analyzing retinal patterns...", type: "info" },
  { text: "Generating Prediction...", type: "info" },
  { text: "Confidence Score: 96.4%", type: "success" },
  { text: "Diagnosis: Healthy", type: "success" },
  { text: "Report Generated Successfully", type: "success" },
]

interface CinematicIntroProps {
  onComplete: () => void
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [phase, setPhase] = useState(0)
  const [displayedCode, setDisplayedCode] = useState<string[]>([])
  const [currentCodeLine, setCurrentCodeLine] = useState(0)
  const [currentCodeChar, setCurrentCodeChar] = useState(0)
  const [terminalIndex, setTerminalIndex] = useState(0)
  const [visionIndex, setVisionIndex] = useState(0)
  const [chartValues, setChartValues] = useState([0, 0, 0, 0])
  const [showName, setShowName] = useState(false)
  const [sparkPosition, setSparkPosition] = useState(0)

  const handleComplete = useCallback(() => {
    onComplete()
  }, [onComplete])

  // Phase 1: Code typing
  useEffect(() => {
    if (phase === 1 && currentCodeLine < codeLines.length) {
      const currentLine = codeLines[currentCodeLine]
      if (currentCodeChar < currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedCode(prev => {
            const newCode = [...prev]
            if (newCode.length <= currentCodeLine) {
              newCode.push(currentLine.charAt(currentCodeChar))
            } else {
              newCode[currentCodeLine] = (newCode[currentCodeLine] || '') + currentLine.charAt(currentCodeChar)
            }
            return newCode
          })
          setCurrentCodeChar(prev => prev + 1)
        }, 20)
        return () => clearTimeout(timeout)
      } else {
        setCurrentCodeLine(prev => prev + 1)
        setCurrentCodeChar(0)
        setDisplayedCode(prev => [...prev, ''])
      }
    } else if (phase === 1 && currentCodeLine >= codeLines.length) {
      setTimeout(() => setPhase(2), 500)
    }
  }, [phase, currentCodeLine, currentCodeChar])

  // Phase 2: Terminal logs
  useEffect(() => {
    if (phase === 2 && terminalIndex < terminalLogs.length) {
      const timeout = setTimeout(() => {
        setTerminalIndex(prev => prev + 1)
      }, 150)
      return () => clearTimeout(timeout)
    } else if (phase === 2 && terminalIndex >= terminalLogs.length) {
      setTimeout(() => setPhase(3), 500)
    }
  }, [phase, terminalIndex])

  // Phase 3: Charts animation
  useEffect(() => {
    if (phase === 3) {
      const targetValues = [96.4, 87, 92, 15]
      const duration = 1500
      const steps = 60
      const interval = duration / steps
      let step = 0

      const timer = setInterval(() => {
        step++
        const progress = step / steps
        setChartValues(targetValues.map(v => Math.round(v * progress)))
        if (step >= steps) {
          clearInterval(timer)
          setTimeout(() => setPhase(4), 500)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [phase])

  // Phase 4: Vision Guard
  useEffect(() => {
    if (phase === 4 && visionIndex < visionGuardLogs.length) {
      const timeout = setTimeout(() => {
        setVisionIndex(prev => prev + 1)
      }, 200)
      return () => clearTimeout(timeout)
    } else if (phase === 4 && visionIndex >= visionGuardLogs.length) {
      setTimeout(() => setPhase(5), 800)
    }
  }, [phase, visionIndex])

  // Phase 5: Name reveal
  useEffect(() => {
    if (phase === 5) {
      setTimeout(() => setShowName(true), 500)
    }
  }, [phase])

  // Spark animation
  useEffect(() => {
    if (showName && sparkPosition < 100) {
      const timeout = setTimeout(() => {
        setSparkPosition(prev => prev + 2)
      }, 20)
      return () => clearTimeout(timeout)
    } else if (sparkPosition >= 100) {
      setTimeout(() => setPhase(6), 1000)
    }
  }, [showName, sparkPosition])

  // Phase 6: Transition to portfolio
  useEffect(() => {
    if (phase === 6) {
      setTimeout(handleComplete, 500)
    }
  }, [phase, handleComplete])

  // Start sequence
  useEffect(() => {
    const timer = setTimeout(() => setPhase(1), 1000)
    return () => clearTimeout(timer)
  }, [])

  const getLogColor = (type: string) => {
    switch (type) {
      case "command": return "text-cyan-400"
      case "success": return "text-emerald-400"
      case "info": return "text-blue-400"
      default: return "text-gray-300"
    }
  }

  return (
    <AnimatePresence>
      {phase < 6 && (
        <motion.div
          className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/50 rounded-full"
                initial={{ 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  opacity: 0 
                }}
                animate={{ 
                  y: [null, Math.random() * -200],
                  opacity: [0, 0.8, 0]
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* Phase 1-4: Code/Terminal/Charts/Vision Grid */}
          {phase >= 1 && phase <= 4 && (
            <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Code Editor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: phase >= 1 ? 1 : 0, y: 0 }}
                className="glass-card rounded-xl p-4 h-[280px] overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">vision_guard.py</span>
                </div>
                <div className="font-mono text-sm space-y-1 overflow-hidden">
                  {displayedCode.map((line, i) => (
                    <div key={i} className="flex">
                      <span className="text-muted-foreground w-8 select-none">{i + 1}</span>
                      <span className={
                        line.startsWith('import') || line.startsWith('from') 
                          ? 'text-purple-400' 
                          : line.startsWith('#') 
                            ? 'text-emerald-400' 
                            : 'text-foreground'
                      }>
                        {line}
                        {i === displayedCode.length - 1 && phase === 1 && (
                          <motion.span 
                            className="inline-block w-2 h-4 bg-primary ml-0.5"
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                          />
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Terminal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: phase >= 2 ? 1 : 0.3, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card rounded-xl p-4 h-[280px] overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
                </div>
                <div className="font-mono text-xs space-y-1 overflow-y-auto h-[220px]">
                  {terminalLogs.slice(0, terminalIndex).map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={getLogColor(log.type)}
                    >
                      {log.type === "success" && "✓ "}
                      {log.type === "info" && "→ "}
                      {log.text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Charts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: phase >= 3 ? 1 : 0.3, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card rounded-xl p-4 h-[280px]"
              >
                <h3 className="text-xs text-muted-foreground mb-4 font-mono">Analytics Dashboard</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary neon-text">{chartValues[0]}%</div>
                    <div className="text-xs text-muted-foreground">Model Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400">{chartValues[1]}%</div>
                    <div className="text-xs text-muted-foreground">Precision</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">{chartValues[2]}%</div>
                    <div className="text-xs text-muted-foreground">Recall</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">{chartValues[3]}K</div>
                    <div className="text-xs text-muted-foreground">Samples</div>
                  </div>
                </div>
                {/* Mini chart bars */}
                <div className="flex items-end justify-center gap-2 mt-4 h-16">
                  {[65, 80, 45, 90, 70, 85, 55, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-4 bg-gradient-to-t from-primary/50 to-primary rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: phase >= 3 ? `${h}%` : 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Vision Guard Scanner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: phase >= 4 ? 1 : 0.3, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-card rounded-xl p-4 h-[280px] relative overflow-hidden"
              >
                <h3 className="text-xs text-muted-foreground mb-3 font-mono">Vision Guard - Eye Analysis</h3>
                <div className="flex gap-4">
                  {/* Eye visualization */}
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Eye outline */}
                      <ellipse 
                        cx="50" cy="50" rx="45" ry="30" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="text-primary/50"
                      />
                      {/* Iris */}
                      <circle 
                        cx="50" cy="50" r="20" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="text-primary"
                      />
                      {/* Pupil */}
                      <circle 
                        cx="50" cy="50" r="8" 
                        className="fill-primary"
                      />
                      {/* Scanner line */}
                      {phase === 4 && (
                        <motion.line
                          x1="5" y1="50" x2="95" y2="50"
                          stroke="cyan"
                          strokeWidth="2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0], y: [-30, 30] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </svg>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" />
                  </div>
                  {/* Logs */}
                  <div className="font-mono text-xs space-y-1 flex-1">
                    {visionGuardLogs.slice(0, visionIndex).map((log, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={getLogColor(log.type)}
                      >
                        {log.type === "success" && "✓ "}
                        {log.type === "info" && "→ "}
                        {log.text}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Phase 5: Name Reveal */}
          {phase === 5 && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center relative"
            >
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: showName ? 1 : 0, y: showName ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <span className="relative">
                  <span className="text-foreground">YAKSH</span>
                  <span className="text-primary neon-text ml-4">TEJA</span>
                  
                  {/* Spark effect */}
                  {showName && sparkPosition < 100 && (
                    <motion.div
                      className="absolute top-1/2 h-1 w-8 bg-gradient-to-r from-transparent via-white to-transparent"
                      style={{ 
                        left: `${sparkPosition}%`,
                        transform: 'translateY(-50%)',
                        boxShadow: '0 0 20px white, 0 0 40px cyan'
                      }}
                    />
                  )}
                </span>
              </motion.h1>
              
              {/* Particles from text */}
              {showName && [...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full"
                  initial={{ 
                    x: 0, 
                    y: 0,
                    opacity: 1
                  }}
                  animate={{ 
                    x: (Math.random() - 0.5) * 300,
                    y: (Math.random() - 0.5) * 200,
                    opacity: 0
                  }}
                  transition={{ 
                    duration: 1 + Math.random(),
                    delay: Math.random() * 0.5
                  }}
                  style={{
                    left: '50%',
                    top: '50%'
                  }}
                />
              ))}
            </motion.div>
          )}

          {/* Skip button */}
          <motion.button
            onClick={handleComplete}
            className="absolute bottom-8 right-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            Skip Intro →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
