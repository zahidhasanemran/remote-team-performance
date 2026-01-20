import Hero from "@/components/landing/sections/Hero"
import PainSolution from "@/components/landing/sections/PainSolution"
import Features from "@/components/landing/sections/Features"
import HowItWorks from "@/components/landing/sections/HowItWorks"
import Trust from "@/components/landing/sections/Trust"
import FinalCTA from "@/components/landing/sections/FinalCTA"

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <PainSolution />
        <Features />
        <HowItWorks />
        <Trust />
        <FinalCTA />
      </div>
    </div>
  )
}
