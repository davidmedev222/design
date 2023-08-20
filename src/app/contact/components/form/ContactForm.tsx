'use client'
import { useIntersectionObserver } from '@/hooks'
import clsx from 'clsx'

function ContactForm() {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.25 }, unobserve: true })

  const classes = {
    form: clsx('mx-auto grid max-w-screen-md gap-y-4 p-4 opacity-0', isIntersecting && 'animate-scale-in'),
    input: clsx('rounded-lg bg-gray-200 p-4 text-base outline-black placeholder:text-base'),
    textarea: clsx('resize-none rounded-lg bg-gray-200 p-4 text-base'),
    button: clsx(
      'rounded-lg bg-black px-10 py-5 text-center text-lg text-white transition-colors duration-300 hover:bg-gray-700'
    )
  }

  return (
    <form ref={ref} className={classes.form}>
      <input className={classes.input} type='text' placeholder='Name' required minLength={3} />
      <input className={classes.input} type='email' placeholder='Email' required minLength={5} />
      <textarea className={classes.textarea} rows={8} placeholder='Message' required minLength={10} />
      <button className={classes.button}>Contact Me</button>
    </form>
  )
}

export default ContactForm
