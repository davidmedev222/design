import { yellowBlurDataURL } from '@/constants'
import { carousel } from '@/services'
import clsx from 'clsx'
import Image from 'next/image'

function Carousel() {
  const imagesCarousel = [...carousel, ...carousel]

  const classes = {
    container: clsx('group relative flex overflow-x-hidden'),
    carousel: clsx('flex h-80 animate-marquee max-sm:animate-duration-25000 lg:h-96 lg:group-hover:animate-pause'),
    carousel2: clsx(
      'absolute top-0 flex h-80 animate-marquee2 max-sm:animate-duration-25000 lg:h-96 lg:group-hover:animate-pause'
    )
  }

  return (
    <div className={classes.container}>
      <ul className={classes.carousel}>
        {imagesCarousel.map((image) => (
          <li key={crypto.randomUUID()} className='relative w-36 sm:w-96'>
            <Image
              src={image.src}
              alt='Presentation image about design projects'
              className='object-cover object-center'
              fill
              placeholder='blur'
              blurDataURL={yellowBlurDataURL}
              sizes='25vw'
            />
          </li>
        ))}
      </ul>
      <ul className={classes.carousel2}>
        {imagesCarousel.map((image) => (
          <li key={crypto.randomUUID()} className='relative w-36 sm:w-96'>
            <Image
              src={image.src}
              alt='Presentation image about design projects'
              className='object-cover'
              fill
              placeholder='blur'
              blurDataURL={yellowBlurDataURL}
              sizes='25vw'
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carousel
