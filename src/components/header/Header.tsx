import { Routes } from '@/models'
import Link from 'next/link'

function Header() {
  return (
    <header className='mx-auto flex max-w-screen-xl items-center justify-between px-4 py-5 text-xl'>
      <Link href={Routes.home}>Desing</Link>
      <Link href='#' className='underline transition-colors duration-300 hover:text-gray-700'>
        Contact
      </Link>
    </header>
  )
}

export default Header
