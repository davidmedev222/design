import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  align?: 'center'
  border?: 'rounded' | 'outline'
  href: string
}

function ButtonAction({ children, href, align, border }: Props) {
  const classes = {
    button: clsx(
      'bg-black px-10 py-5 text-center text-lg text-white transition-colors duration-300 hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300',
      align === 'center' && 'place-self-center',
      border === 'rounded' && 'rounded-full'
    )
  }

  return (
    <a href={href} className={classes.button}>
      {children}
    </a>
  )
}

export default ButtonAction
