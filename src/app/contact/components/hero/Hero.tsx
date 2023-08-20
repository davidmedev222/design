'use client'
import { ButtonLink } from '@/components'
import { useIntersectionObserver } from '@/hooks'
import clsx from 'clsx'

function Hero() {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.5 }, unobserve: true })

  const classes = {
    hero: clsx('mx-auto grid max-w-screen-lg gap-y-8 p-8 opacity-0', isIntersecting && 'animate-scale-in'),
    title: clsx('text-center text-[min(15vw,90px)]'),
    description: clsx('text-center text-base text-gray-500')
  }

  return (
    <section ref={ref} className={classes.hero}>
      <h1 className={classes.title}>Contact Me</h1>
      <p className={classes.description}>
        Thank you for visiting my portfolio! I'm excited to hear from you. If you have any questions, comments, or
        project inquiries, please don't hesitate to get in touch with me. I'll do my best to get back to you as soon as
        possible within 24 hours!
      </p>
      <ButtonLink href='/#works' border='rounded' align='center'>
        Explore Designs
      </ButtonLink>
    </section>
  )
}

export default Hero
