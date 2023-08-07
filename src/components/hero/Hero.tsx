import { ButtonLink } from '..'

function Hero() {
  return (
    <section className='mx-auto grid max-w-screen-xl items-center justify-center gap-y-10 p-10 text-center font-semibold'>
      <h1 className='text-fluid-8xl'>Crafting timeless designs for inspired living</h1>
      <ButtonLink border='rounded' align='center'>
        Explore Designs
      </ButtonLink>
    </section>
  )
}

export default Hero
