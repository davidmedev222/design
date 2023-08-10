'use client'
import { yellowBlurDataURL } from '@/constants'
import { useIntersectionObserver } from '@/hooks'
import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  imageURL: string
}

function Proyect({ imageURL }: Props) {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.2 }, unobserve: true })

  const classes = {
    item: clsx('relative h-72 opacity-0 md:h-96', isIntersecting && 'animate-scale-in')
  }

  return (
    <li ref={ref} className={classes.item}>
      <Image
        src={imageURL}
        className='rounded-xl object-cover'
        fill
        blurDataURL={yellowBlurDataURL}
        placeholder='blur'
        alt='Image of the created design'
      />
    </li>
  )
}

export default Proyect
