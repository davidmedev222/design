import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
  align?: 'center'
  border?: 'rounded' | 'outline'
}

function ButtonAction({ children, align, border }: Props) {
  const classes = {
    button: clsx(
      'bg-black px-10 py-5 text-center text-lg text-white transition-colors duration-300 hover:bg-gray-700',
      align === 'center' && 'place-self-center',
      border === 'rounded' && 'rounded-full'
    )
  }

  return (
    <Link href='#' className={classes.button}>
      {children}
    </Link>
  )
}

export default ButtonAction