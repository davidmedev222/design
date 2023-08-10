'use client'
import { useIntersectionObserver } from '@/hooks'
import clsx from 'clsx'
import ButtonLink from '../button/ButtonLink'

function CallToAction() {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.25 }, unobserve: true })

  const classes = {
    cta: clsx(
      'mx-auto grid max-w-screen-lg items-center justify-center gap-y-10 p-10 opacity-0',
      isIntersecting && 'animate-scale-in'
    ),
    title: clsx('text-center text-[min(5.25vw,44px)]')
  }

  return (
    <section ref={ref} className={classes.cta}>
      <h2 className={classes.title}>
        I've been helping business thrive in the digital space also increasing drastically their revenues building
        insightful strategy, creating unique designs and crafting experiences that bring positive change and value.
      </h2>
      <ButtonLink href='#works' border='rounded' align='center'>
        Explore Designs
      </ButtonLink>
    </section>
  )
}

export default CallToAction
