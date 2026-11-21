import { DialInLab } from './components/DialInLab'
import { DispatchSignup } from './components/DispatchSignup'
import { HarvestShowcase } from './components/HarvestShowcase'
import { HeroCarousel } from './components/HeroCarousel'
import { Manifesto } from './components/Manifesto'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { SommelierAllocation } from './components/SommelierAllocation'

export default function App() {
  return (
    <div className="relative overflow-x-hidden bg-surface text-on-surface antialiased">
      <SiteHeader />
      <main className="w-full bg-surface pt-28">
        <HeroCarousel />
        <HarvestShowcase />
        <Manifesto />
        <SommelierAllocation />
        <DialInLab />
        <DispatchSignup />
      </main>
      <SiteFooter />
    </div>
  )
}
