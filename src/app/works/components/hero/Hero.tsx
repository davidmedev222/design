'use client'
import { ButtonLink } from '@/components'
import { useIntersectionObserver } from '@/hooks'
import { IProyect } from '@/models'
import clsx from 'clsx'

interface Props {
  proyect: IProyect
}

function Hero({ proyect }: Props) {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.5 }, unobserve: true })

  const classes = {
    hero: clsx('mx-auto grid max-w-screen-lg gap-y-8 p-8 opacity-0', isIntersecting && 'animate-scale-in'),
    title: clsx('text-center text-[min(17vw,90px)]'),
    description: clsx('text-center text-base text-gray-500')
  }

  return (
    <section ref={ref} className={classes.hero}>
      <h1 className={classes.title}>{proyect.title}</h1>
      <p className={classes.description}>{proyect.description}</p>
      <ButtonLink href='#mockups' border='rounded' align='center'>
        View Designs
      </ButtonLink>
    </section>
  )
}

export default Hero
