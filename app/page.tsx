"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import VisionGuardSection from "@/components/vision-guard-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

// Dynamic imports for heavy components
const CinematicIntro = dynamic(() => import("@/components/cinematic-intro"), {
  ssr: false,
})

const ParticleBackground = dynamic(() => import("@/components/particle-background"), {
  ssr: false,
})

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleIntroComplete = () => {
    setShowIntro(false)
    setShowContent(true)
  }

  return (
    <main className="relative min-h-screen">
      {/* Cinematic Intro */}
      {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}

      {/* Main Content */}
      {showContent && (
        <>
          {/* Background Effects */}
          <ParticleBackground />
          
          {/* Navigation */}
          <Navbar />

          {/* Page Sections */}
          <HeroSection />
          <AboutSection />
          <VisionGuardSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </main>
  )
}
