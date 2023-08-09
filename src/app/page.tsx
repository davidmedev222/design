import { BrandsMarquee, CallToAction, CarouselMarquee, Hero, RedirectText } from '@/components'

function HomePage() {
  return (
    <main>
      <Hero />
      <CarouselMarquee />
      <RedirectText text='Explore My Work' />
      <CallToAction />
      <BrandsMarquee />
    </main>
  )
}

export default HomePage
