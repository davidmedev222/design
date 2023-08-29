'use client'
import { MoonIcon, SettingIcon, SunIcon } from '@/components'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function DropdownSelectTheme() {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className='rounded-lg bg-gray-200 px-3 py-2'>
        <SettingIcon size={24} className='fill-white' />
      </div>
    )
  }

  const darkmode = theme === 'dark'
  const lightmode = theme === 'light'
  const prefersystem = theme === 'system'

  const toggleDropdown = () => setIsOpen((state) => !state)

  const toggleTheme = (theme: string) => () => {
    setTheme(theme)
    toggleDropdown()
  }

  const classes = {
    dropdown: clsx('relative text-base'),
    value: clsx('cursor-pointer rounded-lg bg-black px-3 py-2 transition-colors duration-300 dark:bg-white'),
    options: clsx(
      'absolute right-0 top-[125%] z-10 scale-0 rounded-lg bg-black px-2 py-2 text-white dark:bg-white dark:text-black',
      isOpen && 'scale-100 transition-transform duration-300'
    ),
    option: {
      default: clsx(
        'flex cursor-pointer items-center gap-x-2 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-gray-500 dark:hover:bg-gray-300'
      ),
      light: clsx(theme === 'light' && 'bg-gray-500'),
      dark: clsx(theme === 'dark' && 'bg-gray-300'),
      system: clsx(theme === 'system' && 'bg-gray-300')
    },
    icons: clsx('fill-white dark:fill-black')
  }

  return (
    <div className={classes.dropdown}>
      <div onClick={toggleDropdown} className={classes.value}>
        {darkmode && <MoonIcon className={classes.icons} size={22} />}
        {lightmode && <SunIcon className={classes.icons} size={22} />}
        {prefersystem && <SettingIcon className={classes.icons} size={22} />}
      </div>
      <ul className={classes.options}>
        <li
          onClick={toggleTheme('light')}
          className={`${classes.option.default} ${classes.option.light}`}
          value='light'
        >
          <SunIcon className={classes.icons} size={24} /> Light
        </li>
        <li onClick={toggleTheme('dark')} className={`${classes.option.default} ${classes.option.dark}`} value='dark'>
          <MoonIcon className={classes.icons} size={24} /> Dark
        </li>
        <li
          onClick={toggleTheme('system')}
          className={`${classes.option.default} ${classes.option.system}`}
          value='system'
        >
          <SettingIcon className={classes.icons} size={24} /> System
        </li>
      </ul>
    </div>
  )
}

export default DropdownSelectTheme
