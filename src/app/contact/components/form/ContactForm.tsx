'use client'
import { Input, Textarea } from '@/components'
import { useIntersectionObserver } from '@/hooks'
import { IFormContact } from '@/models'
import clsx from 'clsx'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

function ContactForm() {
  const form = useForm<IFormContact>()
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.25 }, unobserve: true })

  const classes = {
    form: clsx('mx-auto grid max-w-screen-md gap-y-5 p-4 opacity-0', isIntersecting && 'animate-scale-in'),
    button: clsx(
      'mt-5 rounded-lg bg-black px-10 py-5 text-center text-lg text-white transition-colors duration-300 hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200'
    )
  }

  const onSubmit: SubmitHandler<IFormContact> = (data) => {
    toast.success('Message sent successfully.')
    form.reset()
  }

  return (
    <FormProvider {...form}>
      <form ref={ref} onSubmit={form.handleSubmit(onSubmit)} className={classes.form}>
        <Input type='text' name='name' placeholder='Name' />
        <Input type='email' name='email' placeholder='Email' />
        <Textarea name='message' rows={8} placeholder='Message' />
        <button className={classes.button}>Contact Me</button>
      </form>
    </FormProvider>
  )
}

export default ContactForm
