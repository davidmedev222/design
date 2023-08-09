import { carouselImage, carouselImage2, carouselImage3, carouselImage4, yellowBlurDataURL } from '@/constants'
import clsx from 'clsx'
import Image from 'next/image'

function Carousel() {
  const classes = {
    container: clsx('group relative flex overflow-x-hidden'),
    carousel: clsx(
      'flex h-80 animate-marquee group-hover:[animation-play-state:paused] max-sm:[animation-duration:25000ms] lg:h-96'
    ),
    carousel2: clsx(
      'absolute top-0 flex h-80 animate-marquee2 group-hover:[animation-play-state:paused] max-sm:[animation-duration:25000ms] lg:h-96'
    )
  }

  return (
    <div className={classes.container}>
      <ul className={classes.carousel}>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage2}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage3}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage4}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage2}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage3}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage4}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
      </ul>
      <ul className={classes.carousel2}>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage2}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage3}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage4}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage2}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage3}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
        <li className='relative w-36 sm:w-96'>
          <Image
            src={carouselImage4}
            alt='Presentation image about design projects'
            className='object-cover'
            fill
            placeholder='blur'
            blurDataURL={yellowBlurDataURL}
            sizes='25vw'
          />
        </li>
      </ul>
    </div>
  )
}

export default Carousel
