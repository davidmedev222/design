'use client'

import { yellowBlurDataURL } from '@/constants'
import { useIntersectionObserver } from '@/hooks'
import { carousel } from '@/services'
import clsx from 'clsx'
import Image from 'next/image'

function Carousel() {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.25 }, unobserve: true })
  const imagesCarousel = [...carousel, ...carousel]

  const classes = {
    container: clsx('group relative flex overflow-x-hidden opacity-0', isIntersecting && 'animate-scale-in'),
    carousel: clsx('animate-marquee whitespace-nowrap lg:group-hover:animate-pause'),
    carousel2: clsx('absolute animate-marquee2 whitespace-nowrap lg:group-hover:animate-pause'),
    image: clsx('relative inline-block h-80 w-36 sm:w-96 lg:h-96')
  }

  return (
    <div ref={ref} className={classes.container}>
      <div className={classes.carousel}>
        {imagesCarousel.map((image) => (
          <span key={crypto.randomUUID()} className={classes.image}>
            <Image
              src={image.src}
              alt='Presentation image about design projects'
              className='object-cover object-center'
              fill
              placeholder='blur'
              blurDataURL={yellowBlurDataURL}
              sizes='25vw'
            />
          </span>
        ))}
      </div>
      <div className={classes.carousel2}>
        {imagesCarousel.map((image) => (
          <span key={crypto.randomUUID()} className={classes.image}>
            <Image
              src={image.src}
              alt='Presentation image about design projects'
              className='object-cover'
              fill
              placeholder='blur'
              blurDataURL={yellowBlurDataURL}
              sizes='25vw'
            />
          </span>
        ))}
      </div>
    </div>
  )
}

export default Carousel
