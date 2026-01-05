import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import FinalCTA from '@/components/FinalCTA'
import TheShift from '@/components/TheShift'
import WhoItsFor from '@/components/WhoItsFor'
import Founder from '@/components/Founder'
import HowItFits from '@/components/HowItFits'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <FinalCTA />
      <TheShift />
      <WhoItsFor />
      <Founder />
      <HowItFits />
      <FinalCTA />
    </main>
  )
}
