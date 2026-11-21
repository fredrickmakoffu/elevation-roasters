import { CompanyPlans } from '../components/CompanyPlans'
import { FarmStory } from '../components/FarmStory'
import { HarvestShowcase } from '../components/HarvestShowcase'
import { HeroCarousel } from '../components/HeroCarousel'
import { Manifesto } from '../components/Manifesto'
import { People } from '../components/People'

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <FarmStory />
      <HarvestShowcase />
      <CompanyPlans />
      <Manifesto />
      <People />
    </>
  )
}
