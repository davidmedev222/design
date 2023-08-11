'use client'

import { yellowBlurDataURL } from '@/constants'
import { useIntersectionObserver } from '@/hooks'
import { carousel } from '@/services'
import clsx from 'clsx'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

function Carousel() {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.25 }, unobserve: true })
  const imagesCarousel = [...carousel, ...carousel]

  const classes = {
    container: clsx('group relative flex h-96 overflow-x-hidden opacity-0', isIntersecting && 'animate-scale-in'),
    image: clsx('relative h-80 w-36 sm:w-96 lg:h-96')
  }

  return (
    <div ref={ref} className={classes.container}>
      <Marquee>
        {imagesCarousel.map((image) => (
          <div key={crypto.randomUUID()} className={classes.image}>
            <Image
              src={image.src}
              alt='Presentation image about design projects'
              className='object-cover object-center'
              fill
              placeholder='blur'
              blurDataURL={yellowBlurDataURL}
              sizes='25vw'
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default Carousel
