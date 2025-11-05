import { Suspense } from "react"
import Hero from "./components/Hero"
import Features from "./components/Features"
import AISection from "./components/AISection"
import ArchitectureSection from "./components/ArchitectureSection"
import VercelSection from "./components/VercelSection"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import LoadingSpinner from "./components/LoadingSpinner"
import FluidBackground from "./components/FluidBackground"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] overflow-hidden relative">
      <FluidBackground />
      <Navigation />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <Features />
        <AISection />
        <ArchitectureSection />
        <VercelSection />
        <Footer />
      </Suspense>
    </main>
  )
}
