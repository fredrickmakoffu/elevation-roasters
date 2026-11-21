import { CompanyPlans } from './components/CompanyPlans'
import { FarmStory } from './components/FarmStory'
import { HarvestShowcase } from './components/HarvestShowcase'
import { HeroCarousel } from './components/HeroCarousel'
import { Manifesto } from './components/Manifesto'
import { People } from './components/People'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'

export default function App() {
  return (
    <div className="relative overflow-x-hidden bg-surface text-on-surface antialiased">
      <SiteHeader />
      <main className="w-full bg-surface pt-20">
        <HeroCarousel />
        <FarmStory />
        <HarvestShowcase />
        <CompanyPlans />
        <People />
        <Manifesto />
      </main>
      <SiteFooter />
    </div>
  )
}
