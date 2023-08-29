import { DropdownSelectTheme } from '@/components'
import { Routes } from '@/models'
import Link from 'next/link'

function Header() {
  return (
    <header
      className='mx-auto flex max-w-screen-xl items-center justify-between gap-x-4
     px-4 py-5 text-xl'
    >
      <Link href={Routes.home} className='grow'>
        Desing
      </Link>
      <Link href='/contact' className='underline transition-colors duration-300 hover:text-gray-700'>
        Contact
      </Link>
      <DropdownSelectTheme />
    </header>
  )
}

export default Header
