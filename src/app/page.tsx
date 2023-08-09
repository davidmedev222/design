import { BrandsMarquee, CallToAction, Carousel, Hero, RedirectText } from '@/components'

function HomePage() {
  return (
    <main>
      <Hero />
      <Carousel />
      <RedirectText text='Explore My Work' />
      <CallToAction />
      <BrandsMarquee />
    </main>
  )
}

export default HomePage
