import { carouselImage, carouselImage2, carouselImage3, carouselImage4, yellowBlurDataURL } from '@/constants'
import clsx from 'clsx'
import Image from 'next/image'

function Carousel() {
  const classes = {
    container: clsx('group relative flex h-80 overflow-x-hidden lg:h-96'),
    carousel: clsx(
      'flex h-full w-full animate-marquee [animation-duration:10000ms] group-hover:[animation-play-state:paused] xl:[animation-duration:15000ms]'
    ),
    carousel2: clsx(
      'absolute top-0 flex h-full w-full animate-marquee2 [animation-duration:10000ms] group-hover:[animation-play-state:paused] xl:[animation-duration:15000ms]'
    )
  }

  return (
    <div className={classes.container}>
      <ul className={classes.carousel}>
        <li className='relative grow'>
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
        <li className='relative grow'>
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
        <li className='relative grow'>
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
        <li className='relative grow'>
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
        <li className='relative grow'>
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
        <li className='relative grow'>
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
        <li className='relative grow'>
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
        <li className='relative grow'>
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
