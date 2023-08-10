import { BrandsMarquee, CallToAction, CarouselMarquee, Hero, RedirectText } from '@/components'
import ProyectList from '@/components/proyect/ProyectList'

function HomePage() {
  return (
    <main>
      <Hero />
      <CarouselMarquee />
      <RedirectText text='Explore My Work' />
      <CallToAction />
      <BrandsMarquee />
      <ProyectList />
    </main>
  )
}

export default HomePage
