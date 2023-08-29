import clsx from 'clsx'
import BrandFacebookIcon from '../icons/BrandFacebookIcon'
import BrandInstagramIcon from '../icons/BrandInstagramIcon'
import BrandTwitterIcon from '../icons/BrandTwitterIcon'

function Footer() {
  const classes = {
    footer: clsx('mx-auto flex max-w-screen-xl items-center justify-between px-4 py-10'),
    brand: clsx('group rounded-full bg-black p-2 transition duration-500 dark:bg-white'),
    icon: clsx(
      'fill-black stroke-white transition-transform duration-300 dark:fill-white dark:stroke-black lg:group-hover:-rotate-24'
    )
  }

  return (
    <footer className={classes.footer}>
      <span className='text-base'>&copy; 2023 Design</span>
      <ul className='flex gap-x-4'>
        <li className={classes.brand}>
          <BrandFacebookIcon className={classes.icon} />
        </li>
        <li className={classes.brand}>
          <BrandInstagramIcon className={classes.icon} />
        </li>
        <li className={classes.brand}>
          <BrandTwitterIcon className={classes.icon} />
        </li>
      </ul>
    </footer>
  )
}

export default Footer
