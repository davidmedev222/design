import clsx from 'clsx'
import FacebookIcon from '../icons/FacebookIcon'
import GoogleIcon from '../icons/GoogleIcon'
import TwitchIcon from '../icons/TwitchIcon'
import YouTubeIcon from '../icons/YouTubeIcon'

function BrandsMarquee() {
  const classes = {
    brands: clsx('flex animate-marquee items-center'),
    brands2: clsx('absolute top-0 flex animate-marquee2 items-center')
  }

  return (
    <div className='relative flex overflow-x-hidden'>
      <ul className={classes.brands}>
        <li className='mx-10 grow'>
          <TwitchIcon />
        </li>
        <li className='mx-10 grow'>
          <GoogleIcon />
        </li>
        <li className='mx-10 grow'>
          <YouTubeIcon />
        </li>
        <li className='mx-10 grow'>
          <FacebookIcon />
        </li>
        <li className='mx-10 grow'>
          <TwitchIcon />
        </li>
        <li className='mx-10 grow'>
          <GoogleIcon />
        </li>
        <li className='mx-10 grow'>
          <YouTubeIcon />
        </li>
        <li className='mx-10 grow'>
          <FacebookIcon />
        </li>
        <li className='mx-10 grow'>
          <TwitchIcon />
        </li>
        <li className='mx-10 grow'>
          <GoogleIcon />
        </li>
        <li className='mx-10 grow'>
          <YouTubeIcon />
        </li>
        <li className='mx-10 grow'>
          <FacebookIcon />
        </li>
        <li className='mx-10 grow'>
          <TwitchIcon />
        </li>
        <li className='mx-10 grow'>
          <GoogleIcon />
        </li>
        <li className='mx-10 grow'>
          <YouTubeIcon />
        </li>
        <li className='mx-10 grow'>
          <FacebookIcon />
        </li>
      </ul>
      <ul className={classes.brands2}>
        <li className='mx-10 grow'>
          <TwitchIcon />
        </li>
        <li className='mx-10 grow'>
          <GoogleIcon />
        </li>
        <li className='mx-10 grow'>
          <YouTubeIcon />
        </li>
        <li className='mx-10 grow'>
          <FacebookIcon />
        </li>
        <li className='mx-10 grow'>
          <TwitchIcon />
        </li>
        <li className='mx-10 grow'>
          <GoogleIcon />
        </li>
        <li className='mx-10 grow'>
          <YouTubeIcon />
        </li>
        <li className='mx-10 grow'>
          <FacebookIcon />
        </li>
        <li className='mx-10 grow'>
          <TwitchIcon />
        </li>
        <li className='mx-10 grow'>
          <GoogleIcon />
        </li>
        <li className='mx-10 grow'>
          <YouTubeIcon />
        </li>
        <li className='mx-10 grow'>
          <FacebookIcon />
        </li>
        <li className='mx-10 grow'>
          <TwitchIcon />
        </li>
        <li className='mx-10 grow'>
          <GoogleIcon />
        </li>
        <li className='mx-10 grow'>
          <YouTubeIcon />
        </li>
        <li className='mx-10 grow'>
          <FacebookIcon />
        </li>
      </ul>
    </div>
  )
}

export default BrandsMarquee
