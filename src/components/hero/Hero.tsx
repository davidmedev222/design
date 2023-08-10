'use client'
import { useIntersectionObserver } from '@/hooks'
import clsx from 'clsx'
import ButtonLink from '../button/ButtonLink'

function Hero() {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.5 }, unobserve: true })

  const classes = {
    hero: clsx(
      'mx-auto grid max-w-screen-xl items-center justify-center gap-y-10 p-10 text-center font-semibold opacity-0',
      isIntersecting && 'animate-scale-in'
    )
  }

  return (
    <section ref={ref} className={classes.hero}>
      <h1 className='text-fluid-8xl'>Crafting timeless designs for inspired living</h1>
      <ButtonLink href='#works' border='rounded' align='center'>
        Explore Designs
      </ButtonLink>
    </section>
  )
}

export default Hero
