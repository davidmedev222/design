'use client'
import { yellowBlurDataURL } from '@/constants'
import { useIntersectionObserver } from '@/hooks'
import { IProyect, Routes } from '@/models'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  proyect: IProyect
}

function Proyect({ proyect }: Props) {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.25 }, unobserve: true })

  const classes = {
    proyect: clsx('group relative block aspect-square opacity-0', isIntersecting && 'animate-scale-in'),
    image: clsx('rounded-xl object-cover'),
    background: clsx(
      'absolute bottom-0 grid h-full w-full items-end rounded-xl bg-gradient-to-t from-black px-6 py-4 transition-opacity duration-700 group-hover:opacity-100 lg:opacity-0'
    ),
    name: clsx(
      'text-fluid-8xl text-white transition duration-500 lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100'
    )
  }

  return (
    <li ref={ref}>
      <Link href={`${Routes.works}/${proyect.slug}`} className={classes.proyect}>
        <Image
          src={proyect.src}
          alt='Mockup of a design presentation'
          fill
          sizes='(max-width: 1024px) 100vw, 50vw'
          className={classes.image}
          blurDataURL={yellowBlurDataURL}
          placeholder='blur'
        />
        <div className={classes.background}>
          <span className={classes.name}>{proyect.title}</span>
        </div>
      </Link>
    </li>
  )
}

export default Proyect
